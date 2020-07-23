const barnavbutton = document.querySelector('.barnav');
const mainnav = document.querySelector('.navigation')

barnavbutton.addEventListener('click', () =>
{mainnav.classList.toggle('responsive')}, false);

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&APPID=fbe42185a9d1d8058b38ba6ae362d1f0';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        document.getElementById("currently").textContent = jsObject.weather[0].description;
        var highTemp = document.getElementById("high").innerHTML = ((jsObject.main.temp_max - 273.15) * (9 / 5) + 32).toFixed(1) + " &deg;F";
        document.getElementById("humidity").textContent = jsObject.main.humidity + "%";
        var windSpeed = document.getElementById("speed").textContent = jsObject.wind.speed + " mph";

        if (highTemp <= 50 && windSpeed > 3) {
            var s = Math.pow(windSpeed, 0.16);
            var getWindChill = Math.round((35.74) + (0.6215 * highTemperature) - (35.75 * s) + (0.4275 * highTemperature * s));
            document.getElementById("chill").innerHTML = getWindChill + " &deg;F";
        } else {
            document.getElementById("chill").innerHTML = "N/A";
        }

    });


const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&APPID=fbe42185a9d1d8058b38ba6ae362d1f0';

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const forecast = jsObject['list'];

        for (let i = 5; i < forecast.length; i += 8) {
            const imagesrc = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png';
            const desc = forecast[i].weather[0].description;
            const temp = (forecast[i].main.temp - 273.15) * (9 / 5) + 32;

            document.getElementById(`forecast${i}`).innerHTML = temp.toFixed(1) + " &deg;F";
            document.getElementById(`imgforecast${i}`).setAttribute('src', imagesrc);
            document.getElementById(`imgforecast${i}`).setAttribute('alt', desc);
        }

    });


const rentals = './files/rentals.json';

fetch(rentals)
.then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const rentaltype = jsonObject['rentaltype'];

    for (let i = 0; i < rentaltype.length; i++) {
    
        let card = document.createElement('section');
        let h3 = document.createElement('h3');
        let reservation = document.createElement('h4');
        let walkin = document.createElement('h4');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
        let image = document.createElement('img');
    
    
        h3.textContent = rentaltype[i].type;
        reservation.textContent = 'Reservation';
        walkin.textContent = 'Walk-In';
        p.textContent = 'Max Persons: ' + rentaltype[i].maxpersons;
        p2.textContent = 'Half Day: $' + rentaltype[i].reservation[0].halfday;
        p3.textContent = 'Full Day: $' + rentaltype[i].reservation[0].fullday;
        p4.textContent = 'Half Day: $' + rentaltype[i].walk[0].halfday;
        p5.textContent = 'Full Day: $' + rentaltype[i].walk[0].fullday;
        image.setAttribute('src', rentaltype[i].imageurl);
        image.setAttribute('alt', rentaltype[i].type);
    
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(reservation);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(walkin);
        card.appendChild(p4);
        card.appendChild(p5);
        card.appendChild(image);
            
        document.querySelector('div.rentals').appendChild(card);
      }

  });




