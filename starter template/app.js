// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0
const notificationElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElementElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");

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