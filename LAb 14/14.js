"use strict";

const countriesContainer = document.querySelector(".countries");

const renderCountry = function () {
  const html = `
    <article class="country">
    <img class ="country_img" src=${data.flags.svg}"/>
    <div class="country-data">
    <h3 class="country_name">${data.name}</h3>
    <h4 class="country_region"${data.region}</h4>
    <p class="country_row"><span>❤️</span>${(
      +data.population / 1000000
    ).toFixed(1)}people</p>
    <p class = "country_row"><span>🤷‍♀️</span>${data.languages[0].name}</p>
    <p class = "country_row"><span>💲</span>${data.currencies[0].name}</p>
    </div>
    </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

function whereAmI(Lat, Lgn) {
  fetch(`https://geocode.xyz/${Lat},${Lgn}?geoit=json`)
    .then(function (response) {
      if (!response.ok) throw new Error(`Error code : ${response.status}`);

      return response.json();
    })
    .then(function (data) {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(function (response) {
      if (!response.ok) throw new Error(`Error code : ${response.status}`);

      return response.json();
    })
    .then(function (data) {
      renderCountry(data[0]);
    })
    .catch((err) => console.log(`ERROR :${err.message}`));
}

whereAmI(52.508, 13.381);

setTimeout(function(){
    whereAmI(19.037, 72.873);
},2000);

setTimeout(function(){
    whereAmI(-33.933, 18.474);
},3000);