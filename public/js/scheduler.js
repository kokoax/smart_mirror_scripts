function getSecond(sec) {
  return sec * 1000;
}

function getMinute(min) {
  return min * 1000000;
}

setInterval(weather, getMinute(60));
setInterval(todo, getMinute(60));
setInterval(time, getSecond(30));
