
//let apikey = "aec709ea735b597128350dd8507fd42c";//


/*

function appicall(city){

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aec709ea735b597128350dd8507fd42c&units=metric`)
.then(response => response.json())
.then(data => {


	document.getElementById("pays").innerHTML=`${data.name}`;
    document.getElementById("temperature").innerHTML=`${data.main.temp} deg`;
    document.getElementById("humidite").innerHTML=`${data.main.humidity} hum`;
    document.getElementById("froid").innerHTML=`${data.wind.speed} wind`;
        
});
}
let search = document.querySelector("form");

search.addEventListener('submit', e=>{  
e.preventDefault() 
let ville =document.querySelector("#inputcity").value;




appicall(ville);

})*/
