const displejs = document.getElementById("displejs");
let rekins = '';
function rakstitDisp(input){
  displejs.value += input;
}

function notiritDisp(){
  displejs.value = "";
}

function aprekinat(){
  
  try{
    rekins = displejs.value+'='+eval(displejs.value);
     displejs.value = eval(displejs.value);
     document.getElementById("vesture2").innerHTML = rekins;
   
    
  }
  catch(error){
    displejs.value = "Kļūda";
  }
}
function paraditInfo() {
    var container = document.getElementById("container2");
    console.log(container.style.display);
    if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}
function paraditVest() {
    var vesture = document.getElementById("vesture2");
    if (vesture.style.display === "none" || vesture.style.display === "") {
        vesture.style.display = "block";
    } else {
        vesture.style.display = "none";
    }
}


const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    const APIKey = '3bc28c6d252886673f6a29c24af932e6';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                container.style.height = '60px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                error404.innerHTML = `Nav atrasta pilsēta`;
                error404.style.textAlign = 'center';
                return;
            }
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const mitrums = document.querySelector('.weather-details .mitrums span');
            // const vejs = document.querySelector('.weather-details .vejs span');

            temperature.innerHTML = `TEMPERATŪRA: ${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description.toUpperCase()}`;
            mitrums.innerHTML = `${json.main.humidity}% GAISA MITRUMS`;
            // vejs.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '180px';


        });


});