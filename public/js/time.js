function time() {
  (async function show() {
    var time = document.getElementById("time");
    var date = document.getElementById("date");
    var d = new Date();

    var hour = d.getHours();
    var minute = d.getMinutes();

    var month = d.getMonth() + 1;
    var day = d.getDate();
    var year = d.getFullYear();
    var dayOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d.getDay()]

    time.innerHTML = zeroPadding(hour, 2) + "<span class=\"colon\">:</span>" + zeroPadding(minute, 2);
    date.innerText = [zeroPadding(month, 2), zeroPadding(day, 2), year].join("/") + " " + dayOfWeek
  })()
}
