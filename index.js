var apikey = "2444df37c9db2531b3a617d61c6a420b";

var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;

function updateByInput(input) {
  var url =
    "http://api.openweathermap.org/data/2.5/weather?" +
    input +
    "&units=imperial&APPID=" +
    apikey;
  sendRequest(url);
}

function sendRequest(url) {
  var xhrCall = new XMLHttpRequest();
  //dont need to check ready state
  xhrCall.onreadystatechange = function() {
    if (xhrCall.readyState == 4 && xhrCall.status == 200) {
      var data = JSON.parse(xhrCall.responseText);
      var weather = {};
      weather.icon = data.weather[0].id;
      weather.humidity = data.main.humidity;
      weather.wind = data.wind.speed;
      var degree = data.wind.deg;
      console.log(degree);
      if (degree > 337.5) weather.direction = "Northerly";
      if (degree > 292.5) weather.direction = "North Westerly";
      if (degree > 247.5) weather.direction = "Westerly";
      if (degree > 202.5) weather.direction = "South Westerly";
      if (degree > 157.5) weather.direction = "Southerly";
      if (degree > 122.5) weather.direction = "South Easterly";
      if (degree > 67.5) weather.direction = "Easterly";
      if (degree > 22.5) {weather.direction = "North Easterly";}
      weather.loc = data.name;
      weather.temp = data.main.temp;
      update(weather);
    }
  };
  xhrCall.open("GET", url, true);
  xhrCall.send();
}

function update(weather) {
  wind.innerHTML = weather.wind;
  direction.innerHTML = weather.direction;
  humidity.innerHTML = weather.humidity;
  loc.innerHTML = weather.loc;
  temp.innerHTML = weather.temp;
  icon.src = "imgs/codes/" + weather.icon + ".png";
}

var input;
window.onload = function() {
  temp = document.getElementById("temperature");
  loc = document.getElementById("location");
  icon = document.getElementById("icon");
  humidity = document.getElementById("humidity");
  wind = document.getElementById("wind");
  direction = document.getElementById("direction");
  document.getElementById("inputButton").addEventListener("click", function() {
    var name = $("#nameInput").val();
    var zip = $("#zipInput").val();
    console.log(name, zip);
    if (zip == "") {
      input = "q=" + name;
    } else {
      input = "zip=" + zip;
    }
    document.getElementById("nameInput").value = "";
    document.getElementById("zipInput").value = "";
    updateByInput(input);
  });
};
