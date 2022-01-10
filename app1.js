

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=Rouen&appid=aec709ea735b597128350dd8507fd42c`)
// .then(response => response.json())
// .then(data => console.log(data));


// 
const req = async() =>{
    meteo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Rouen&appid=aec709ea735b597128350dd8507fd42c&units=metric`)
    .then(response => response.json())
    
    
    // azerty(meteo.coord);
      .then (data => console.log(data));
}
req();

let grand  = document.getElementsByClassName("box")
async function azerty(mm){
    let nn = mm.coord
    console.log(nn);
    grand.innerHtml="";
    for (let i = 0; i <nn.length; i++) {
        grand.innerHtml =`
        <div class="col-12 col-sm-6 d-flex justify-content-center my-3">
        <div class="box-container">
          <div id="pays" class="box">${nn.name}</div>
          <div id="temperature" class="box">${nn.main.temp}</div>
          <div id="humidite" class="box">${nn.main.humidity}</div>
          <div id="froid" class="box">${nn.wind.speed}</div>
        </div>
      </div>`
        
    };
}