const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=fbe42185a9d1d8058b38ba6ae362d1f0';

fetch(apiURL) 
    .then((response) => response.json())
    .then((jsObject) => {

        document.getElementById("currently").textContent = jsObject.weather[0].description;
        var highTemp = document.getElementById("high").innerHTML = ((jsObject.main.temp_max - 273.15) * (9 / 5) + 32).toFixed(1) + " &deg;F";
        document.getElementById("humidity").textContent = jsObject.main.humidity + "%";
        var windSpeed = document.getElementById("speed").textContent = jsObject.wind.speed + " mph";

        if (highTemp <= 50 && windSpeed > 3){
            var s = Math.pow(windSpeed, 0.16);
            var getWindChill = Math.round((35.74) + (0.6215 * highTemperature) - (35.75 * s) + (0.4275 * highTemperature * s));
            document.getElementById("chill").innerHTML = getWindChill + " &deg;F";
        } 
        else {
            document.getElementById("chill").innerHTML = "N/A";
        }

    });


    const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=fbe42185a9d1d8058b38ba6ae362d1f0';

    fetch(forecastURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);

            const forecast = jsObject['list'];

            for(let i = 5; i < forecast.length; i+=8) {
                const imagesrc = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png';
                const desc = forecast[i].weather[0].description;
                const temp = (forecast[i].main.temp - 273.15) * (9 / 5) + 32;

                document.getElementById(`forecast${i}`).innerHTML = temp.toFixed(1) + " &deg;F";
                document.getElementById(`imgforecast${i}`).setAttribute('src', imagesrc);
                document.getElementById(`imgforecast${i}`).setAttribute('alt', desc);
            }

        });

