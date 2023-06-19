let result = document.getElementById("result")
let searchBtn = document.getElementById("search-btn")
let city =document.getElementById("city")
let key ="412dcb34393efca530374a3860f206e4";


//Function to fetch weather details from api and display them

let getWeather =()=>{
  let cityValue =city.value;

  //if the input field is empty
  if(cityValue.length == 0){
    result.innerHTML=`
    <h3 class="msg">Please enter a city Name</h3>`;
  }

  //if input field is Not empty
  else{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}
    &appid=${key}&units=metric`;
    city.value="";
    fetch(url)
  .then((response) => response.json())
  .then((weatherData)=>{
    console.log(weatherData);
    console.log(weatherData.weather[0].icon)
    console.log(weatherData.weather[0].main)
    console.log(weatherData.weather[0].description)
    console.log(weatherData.name);
    console.log(weatherData.main);
    console.log(weatherData.main.temp_min)
    console.log(weatherData.main.temp_max)
    result.innerHTML=`<h2>${weatherData.name}</h2>
    <h4 class"weat">${weatherData.weather[0].main}</h4>
    <h4 class="decription">${weatherData.weather[0].description}</h4>
    <img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png">
    <h1>${weatherData.main.temp} &#176;</h1>
    <div class="temp-container">
    <div>
    <h4 class="title">min<h4>
    <h4 class="temp">${weatherData.main.temp_min}</h4>
    </div>

    <div>
    <h4 class="title">min<h4>
    <h4 class="temp">${weatherData.main.temp_max}</h4>
    </div>
    </div>
    `
  })
  .catch(()=>{
    weatherData.innerHTML`<h3 class="msg">City not found</h3>`
  }) 
}
}
searchBtn.addEventListener("click",getWeather)
window.addEventListener("load", getWeather)