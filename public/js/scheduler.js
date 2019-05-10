function getSecond(sec) {
  return 30 * 1000;
}

function getMinute(min) {
  return min * 1000000;
}

weather();
todo();
time();

setInterval(weather, getMinute(60));
setInterval(todo, getMinute(60));
setInterval(time, getSecond(30));
