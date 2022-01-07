  
  
    let apikey ="7843f8d22a43911f15301ef8d76338ae";
  
  const req = async() => {
      images = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7843f8d22a43911f15301ef8d76338ae&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`)
      .then(reponse => reponse.json())
      dispalyMovie(images.results)
      
  }
req();


  let formulaire = document.querySelector("form")
  let recherche = document.getElementById("boutton");


formulaire.addEventListener('submit', (e) =>{
    let searchinput = document.getElementById("inputsearch").value;
     e.preventDefault()
    //  console.log(searchinput.value);
     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchinput}`)
          .then(reponse => reponse.json())
          .then(data => {
            //    console.log(data)
               dispalyMovie(data.results)
          })
})

formulaire.addEventListener('keyup', (e) =>{
    let searchinput = document.getElementById("inputsearch").value;
     e.preventDefault()
     console.log(searchinput);
     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchinput}`)
          .then(reponse => reponse.json())
          .then(data => {
            //    console.log(data)
               dispalyMovie(data.results)
          })
})




let img = document.getElementById("voir");
    async function dispalyMovie(res){
     img.innerHTML = '';
          for(let i = 0; i < res.length ;i++) {
               img.innerHTML += `<div class="card-group col-md-3">
                                   <div class="card" style="width: 18rem;margin:20px;" onclick="page2(${res[i].id})">
                                        <img class="card-img-top" src="https:image.tmdb.org/t/p/w500${res[i].backdrop_path}" alt="Card image cap" >
                                        <div class="card-body">
                                        <h5 class="card-title"> <a href="#" class="btn btn-primary" onclick="page2()">${res[i].title}</a></h5>
                                        </div>
                                   </div>
                                </div>
                                `                  
            };  
            
  
    }
function page2(id){
   console.log(id);
   fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`)
   .then((Reponse) => Reponse.json())
   .then((data) => {
    console.log(data)
         img.innerHTML =
                               `<div class="card-group col-md-3">
                                     <div class="card" style="width: 18rem;margin:20px;">
                                          <img class="card-img-top" src="https:image.tmdb.org/t/p/w500${data.backdrop_path}" alt="Card image cap">
                                          <div class="card-body">
                                          <h5 class="card-title">${data.title}</h5>
                                          <p class="card-text">${data.overview}.</p>
                                          <a href="#" class="btn btn-primary">${data.release_date}</a>
                                          </div>
                                     </div>
                                  </div>`    
   })
     
}

function p1(){
    // console.log('azerty');
    fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`)
    .then(reponse => reponse.json())
          .then(data => {
            //    console.log(data)
               dispalyMovie(data.results)
          })
}
function p2(){
    // console.log('azerty');
    fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=2`)
    .then(reponse => reponse.json())
          .then(data => {
            //    console.log(data)
               dispalyMovie(data.results)
          })
}
function p3(){
    // console.log('azerty');
    fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=3`)
    .then(reponse => reponse.json())
          .then(data => {
            //    console.log(data)
               dispalyMovie(data.results)
          })
}

let azert = 3;
function next(){
    azert++
     console.log('azert');
    fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=${azert}`)
    .then(reponse => reponse.json())
          .then(data => {
            //    console.log(data)
               dispalyMovie(data.results)
          })
}
let azerty = 0;
function previous(){
    azerty--
     console.log('azerty');
    fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=${azerty}`)
    .then(reponse => reponse.json())
          .then(data => {
            //    console.log(data)
               dispalyMovie(data.results)
          })
}



    

    
// let affiche = document.querySelectorAll(".btn btn-primary")
    // affiche.foreach( img =>{
    //    img .addEventListener('click', e =>{
    //         console.log(e.target.value);
            
    //     })
    // })

    




    