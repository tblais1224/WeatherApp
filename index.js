var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;

function update(weather) {
  wind.innerHTML = weather.wind;
  direction.innerHTML = weather.direction;
  humidity.innerHTML = weather.humidity;
  loc.innerHTML = weather.loc;
  temp.innerHTML = weather.temp;
  icon.src = "imgs/codes/" + weather.icon + ".png";
};

window.onload = function() {
  temp = document.getElementById("temperature");
  loc = document.getElementById("location");
  icon = document.getElementById("icon");
  humidity = document.getElementById("humidity");
  wind = document.getElementById("wind");
  direction = document.getElementById("direction");

  var weather = {};
  weather.wind = 3.5;
  weather.humidity = 35;
  weather.direction = "N";
  weather.loc = "Providence";
  weather.temp = "50";
  weather.icon = 300;

  update(weather);
}
