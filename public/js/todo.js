function getTodos(key, token) {
  var listId = "5c7ca122766e320f50d4ece6";

  var BASE_URL = "https://trello.com/1/list/" + listId + "/cards";

  const params = new URLSearchParams();
  params.set("key", key);
  params.set("token", token);
  params.set("fields", "name");

  return fetch(BASE_URL + "?" + params.toString())
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
}

function todo() {
  (async function show() {
    var todoDiv = document.getElementById("todos");
    todoDiv.innerHTML = ' ';

    var trelloKey= (await fetch("/assets/trello_key")
      .then((resp) => resp.text()))
      .slice(0, -1);

    var trelloToken = (await fetch("/assets/trello_token")
      .then((resp) => resp.text()))
      .slice(0, -1);

    var todoInfo = (await getTodos(trelloKey, trelloToken));
    for(var i = 0; i < todoInfo.length; i++) {
      var div = document.createElement('div');
      var p = document.createElement('p');
      var svg = createSVG("/img/free/checkbox.svg#checkbox")

      p.setAttribute("class", "todo-item todo-text");
      div.setAttribute("class", "todo-wrapper");
      svg.classList.add("todo-item")
      svg.setAttribute("width", "20");
      svg.setAttribute("height", "20");

      p.innerText = todoInfo[i].name;


      div.append(svg)
      div.append(p)

      todoDiv.append(div);
    }
  })()
}
