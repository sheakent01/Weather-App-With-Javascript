// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0

//SELECT ELEMENTS
const notificationElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElementElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");

//App Data
const weather = {

      temperature : {
        value : 18,
        unit : "celsius"
      },
      description : "few clouds",
      iconId : "01d",
      city : "London",
      country : "GB"
};

displayWeather(){
iconElement.innerHTML =
    <img src ="icons/${weather.iconId}.png"/>;

tempElement.innerHTML = 29° C
     ${weather.temperature.value} ° <span>C</span>;

descElement.innerHTML = Clear sky
     weather.description;

locationElement.innerHTML = London, GB 
     ${weather.city}, ${weather.country};

    }

function celsiusToFahrenheit(temperature){
    (temperature * 9/5) + 32;
}

tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    if(weather.temperature.unit === "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        tempElement.innerHTML = ${fahrenheit}° <span>F</span>;
        weather.temperature.unit = "fahrenheit";

    }else{
   
        tempElement.innerHTML = ${weather.temperature.value}° <span>C</span>;
    }
}
});

//Check if browser supports geolocation
if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser Doesn't Support Geolocation.</p>"
}

//Set User's Position
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude.longtidue);
}

//Show error when there is an issue with Geolocation
function showError(error) {
  notificationElement.style.display = "block";
  notificationElement.innerHTML=<p> ${error.message} </p>;
}

const KELVIN = 273;
//API Key
const key = "82005d27a116c2880c8f0fcb866998a0";

//Get weather from API provider
function getWeather(latitude, longitude){
    let api = "http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}";
    fetch(api)
    .then(function(response))
}