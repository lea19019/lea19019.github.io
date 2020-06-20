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

    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let photo = document.createElement('img');

        h2.textContent = towns[i].name;
        h4.textContent = towns[i].motto;
        p.textContent = 'Year Founded: ' + towns[i].yearFounded;
        p2.textContent = 'Population: ' + towns[i].currentPopulation;
        p3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        photo.setAttribute('src', towns[i].photo);
        photo.setAttribute('alt', towns[i].name);

        card.appendChild(h2);
        card.appendChild(h4);
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(photo);
        
        document.querySelector('div.towns').appendChild(card);
    }

  });