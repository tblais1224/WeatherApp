$(document).ready(function() {
  //this is a function to call on submitting the search field
  $("#cityInputBut").click(function() {
    //load github users
    var search = $("#weatherCityInput").val();

    var xhr = new XMLHttpRequest();
    xhr.open("GET", `api.openweathermap.org/data/2.5/weather?q=${search}&APPID={addkey}`, true);
    xhr.onload = function() {
      console.log(xhr);
    };
    xhr.send();
  });
});
