import "./styles.css";
import axios from "axios";
//Part 1
//const currentDate = new Date();
//const daysOfWeek = [
//"Sunday",
//"Monday",
//"Tuesday",
//"Wednesday",
//"Thursday",
//"Friday",
//"Saturday"
//];
//const dayOfWeek = daysOfWeek[currentDate.getDay()];
//const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();

//const timeNow = document.getElementById("timeNow");
//timeNow.textContent = `${dayOfWeek} ${hours}:${minutes}`;

//Part 2
function displayCity(event) {
  event.preventDefault();
  let heading = document.getElementById("heading");
  let city = document.getElementById("cityInput").value;
  document.getElementById("cityResult");
  heading.textContent = city;
}

// const form = document.getElementById("searchForm");
// form.addEventListener("submit", displayCity);

//Week 5 Homework
function enterLocation(city) {
  let apiKey = "a19fd5e24c12e8e4e25e3720ab09ab05";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(function (response) {
    showCity(response);
    showTemp(response);
  });
}

function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  console.log(temp);
  console.log(response);
  let h1 = document.querySelector(".temp-now");
  h1.innerHTML = `${temp}°C`;
}

function showCity(response) {
  let city = response.data.name;
  let h2 = document.querySelector("#heading");
  h2.innerHTML = city;
}

function formSubmit(event) {
  event.preventDefault();
  let weatherInput = document.querySelector("#cityInput").value;
  enterLocation(weatherInput);
}

let now = new Date();
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
console.log(weekDays);

let day = weekDays[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let li = document.querySelector("#timeNow");
li.innerHTML = `${day} ${hours}:${minutes}`;

let weatherSearch = document.querySelector("#searchForm");
weatherSearch.addEventListener("submit", formSubmit);
