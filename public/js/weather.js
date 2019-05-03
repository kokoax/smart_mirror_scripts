function getWeatherInfo(token) {
  // var BASE_URL = "http://dataservice.accuweather.com/currentconditions/v1/data"
  var locationKey = "224170" // 盛岡のkey
  var BASE_URL = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/" + locationKey

  var details = "true" // 詳細情報を含むかどうか
  var metric = "true" // Metric情報を含むかどうか

  const params = new URLSearchParams();
  params.set("apikey", token);
  params.set("details", details);
  params.set("metric", metric);

  return fetch(BASE_URL + "?" + params.toString())
    .then((resp) => resp.json())
    .catch((err) => console.log(err))
}

function weather() {
  (async function show() {
    var hour = new Date().getHours()
    // var iconUrl = "https://vortex.accuweather.com/adc2010/images/slate/icons/";
    var iconUrl = "/img/accuweather-icon/svg/";
    var tempMax = document.getElementById("temp-max");
    var tempMin = document.getElementById("temp-min");
    var precipitation = document.getElementById("precipitation");
    var phrase = document.getElementById("phrase");
    var weatherIcon = document.getElementById("weather-icon").parentNode;

    var windSpeed = document.getElementById("wind-speed");
    var windDirection = document.getElementById("wind-direction");

    var DAY = {"from": 6, "to": 18}

    var accuToken = (await fetch("/assets/accu_token")
      .then((resp) => resp.text()))
      .slice(0, -1);

    var weatherInfo = (await getWeatherInfo(accuToken));
    if(DAY.from < hour && DAY.to > hour) {
      var dialyForcasts = weatherInfo.DailyForecasts[0].Day
    } else {
      var dialyForcasts = weatherInfo.DailyForecasts[0].Night
    }

    tempMax.innerText = weatherInfo.DailyForecasts[0].Temperature.Maximum.Value;
    tempMin.innerText = weatherInfo.DailyForecasts[0].Temperature.Minimum.Value;
    precipitation.innerText = dialyForcasts.PrecipitationProbability;
    phrase.innerText = dialyForcasts.IconPhrase;
    windSpeed.innerText = dialyForcasts.Wind.Speed.Value;
    windDirection.innerText = dialyForcasts.Wind.Direction.English;

    var svg = createSVG(iconUrl + zeroPadding(dialyForcasts.Icon, 2) + ".svg#Icons");
    svg.classList.add("weather-icon")
    svg.setAttribute("width", "60");
    svg.setAttribute("height", "60");

    weatherIcon.removeChild(weatherIcon.firstElementChild);
    weatherIcon.append(svg);
  })()
}
