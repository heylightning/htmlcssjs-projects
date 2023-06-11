document.getElementById("clickMe").addEventListener("click", function() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '25c4922b9bmsh7c2a00d08b662fdp1f86a4jsn04fbd6d35306',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };


    var userL = String(document.getElementById("userLocation").value);

    var API_URL = 'https://yahoo-weather5.p.rapidapi.com/weather?location=' + String(userL.split(" ").join("")) + '&format=json&u=f';

    console.log(API_URL)
    
    fetch(API_URL, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            document.getElementById("humidity").innerHTML = response.current_observation.atmosphere.humidity;

            document.getElementById("pressure").innerHTML = response.current_observation.atmosphere.pressure;

            document.getElementById("temperature").innerHTML = response.current_observation.condition.temperature;

            document.getElementById("condition").innerHTML = 
            response.current_observation.condition.text;

            document.getElementById("visibility").innerHTML = response.current_observation.atmosphere.visibility;
        })
        .catch(err => {
            console.error(err);
        });
});

