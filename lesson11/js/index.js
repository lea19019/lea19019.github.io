document.getElementById('last').textContent = document.lastModified

let options = { year: "numeric"};

document.getElementById("currentYear").textContent = new Date().toLocaleDateString('en-US', options);


const barnavbutton = document.querySelector('.barnav');
const mainnav = document.querySelector('.navigation')

barnavbutton.addEventListener('click', () =>
{mainnav.classList.toggle('responsive')}, false);

let show = new Date();

if(show.getDay() == 6 ){
    document.getElementById("pancakes").style.display = "block";
} else{
    document.getElementById("pancakes").style.display = "none";
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];
    const page = towns.filter(towns => (towns.name == 'Preston' || towns.name == 'Fish Haven' || towns.name == 'Soda Springs'));

    page.forEach(towns => {

        let card = document.createElement('section');
        let info = document.createElement('div');
        let name = document.createElement('h3');
        let motto = document.createElement('h4');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rain = document.createElement('p');
        let photo = document.createElement('img');

        if (towns.name == 'Fish Haven') {
          photo.setAttribute('class', 'move');
        }
        card.setAttribute('class', 'secs')
        info.setAttribute('class', 'data')
        name.textContent = towns.name;
        motto.textContent = towns.motto;
        year.textContent = 'Year Founded: ' + towns.yearFounded;
        population.textContent = 'Population: ' + towns.currentPopulation;
        rain.textContent = 'Annual Rain Fall: ' + towns.averageRainfall;
        photo.setAttribute('src', towns.photo);
        photo.setAttribute('alt', towns.name);

        card.appendChild(info);
        info.appendChild(name);
        info.appendChild(motto);
        info.appendChild(year);
        info.appendChild(population);
        info.appendChild(rain);
        card.appendChild(photo);
        
        document.querySelector('div.towns').appendChild(card);
    })
  });