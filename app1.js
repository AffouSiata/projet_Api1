
let apikey ="aa3bf83caa2cd92242a974efe9f958d1"
fetch(`https://api.openweathermap.org/data/2.5/weather?q=abidjan&appid=${apikey}&units=metric`)
.then(response => response.json())
.then(data => {
  /*console.log(data);
  console.log(data.main);*/
 appicall(data)
  
});


// recherche //


let search = document.querySelector("form");

let btn = document.getElementById("recherche");


search.addEventListener('submit', e=>{
  let pays = document.getElementById("inputcity").value;
  e.preventDefault();
  
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${pays}&appid=${apikey}&units=metric`)
.then(response => response.json())
.then(data => {
  console.log(data);
  console.log(data.main);
  appicall(data)
  
  });

})
 

// recuperation //





let grand  = document.querySelector(".box")
async function appicall(data){
    console.log(data);

    document.getElementById("pays").innerHTML= data.name ;
    document.getElementById("temperature").innerHTML= "<i class='fas fa-temperature-high'> " +   data.main.temp_max +  ' ° '  ;
    document.getElementById("humidite").innerHTML= " <i class='fas fa-tint'> " +    data.main.humidity    +   ' % '  ;
    document.getElementById("froid").innerHTML= " <i class='fas fa-wind'>  "  +    data.wind.speed  +  ' km/h ' ;     
}


