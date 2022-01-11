
let country = document.getElementById("inputcity");
let search = document.querySelector("form");
let nom_pays = "abidjan";


// recherche //
search.addEventListener('submit', e=>{
  e.preventDefault()
  console.log(country.value);
nom_pays = country.value;
  

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nom_pays}&appid=aec709ea735b597128350dd8507fd42c&units=metric`)
.then(response => response.json())
.then(data => {
  console.log(data);
  console.log(data.main);
  azerty(data)
});


let grand  = document.querySelector(".box");

async function azerty(data){
    console.log(data);

    document.getElementById("pays").innerHTML=`${data.name}`;
    document.getElementById("temperature").innerHTML=`${data.main.temp} deg`;
    document.getElementById("humidite").innerHTML=`${data.main.humidity} hum`;
    document.getElementById("froid").innerHTML=`${data.wind.speed} wind`;
        
}

  
})

// recuperation //


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nom_pays}&appid=aec709ea735b597128350dd8507fd42c&units=metric`)
.then(response => response.json())
.then(data => {
  console.log(data);
  console.log(data.main);
  azerty(data)
});


let grand  = document.querySelector(".box");

async function azerty(data){
    console.log(data);

    document.getElementById("pays").innerHTML=`${data.name}`;
    document.getElementById("temperature").innerHTML=`${data.main.temp} deg`;
    document.getElementById("humidite").innerHTML=`${data.main.humidity} hum`;
    document.getElementById("froid").innerHTML=`${data.wind.speed} wind`;
        
}