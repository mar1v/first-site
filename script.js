const apiKEY = '9b6eec711707f6f609e1643cc7f7e9c4';
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
async function getWeather(city) {
    try {
        const response = await fetch(`${apiURL}+${city}&appid=${apiKEY}`);
        const respData = await response.json();
        if(respData.cod == '404'){
            document.querySelector('.error').style.display = 'block';
            document.querySelector('.weather').style.display = 'none';
        }else{
        
        
            console.log(respData);
    
    document.querySelector('.city').innerHTML = respData.name;
    document.querySelector('.temp').innerHTML = Math.round(respData.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = respData.main.humidity + '%';
    document.querySelector('.wind').innerHTML = respData.wind.speed + 'km/h';
    
    if(respData.weather[0].main == 'Clouds'){
        document.querySelector('.weather-icon').src = './images/clouds.png';
    }else if(respData.weather[0].main == 'Clear'){
        document.querySelector('.weather-icon').src = './images/clear.png';
    }else if(respData.weather[0].main == 'Rain'){
        document.querySelector('.weather-icon').src = './images/rain.png';
    }else if(respData.weather[0].main == 'Drizzle'){
        document.querySelector('.weather-icon').src = './images/drizzle.png';
    }else if(respData.weather[0].main == 'Mist'){
        document.querySelector('.weather-icon').src = './images/mist.png';
    }
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
        }
    
        }
        catch (error) {
            console.error('Error fetching weather data:', error);
        }


}

searchBtn.addEventListener('click', () => {
    getWeather(searchBox.value);
});
 searchBox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        getWeather(searchBox.value);
    }
});

