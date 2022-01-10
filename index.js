
 const req = async() => {
      images = await fetch(` https://api.themoviedb.org/3/discover/movie?api_key=7843f8d22a43911f15301ef8d76338ae&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`)
      .then(reponse => reponse.json())
      dispalyMovie(images.results)
      
  }
req();


  let searchinput = document.getElementById("search");
  let recherche = document.getElementById("recherche");
  let apikey ="7843f8d22a43911f15301ef8d76338ae";

recherche.addEventListener('click', (e) =>{
     e.preventDefault()
     console.log( e.target.value);
     
     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchinput.value}`)
          .then(reponse => reponse.json())
          .then(data => {
               // console.log(data)
               dispalyMovie(data.results)
          })
         
          

     })
let img = document.getElementById("img");
    async function dispalyMovie(res){
     img.innerHTML = ''
          for(let i = 0; i < res.length ;i++) {
               img.innerHTML += `<div class="card-group col-md-3">
                                   <div class="card" style="width: 18rem;margin:20px;">
                                        <img class="card-img-top" src="https:image.tmdb.org/t/p/w500${res[i].backdrop_path}" alt="Card image cap">
                                        <div class="card-body">
                                        <h5 class="card-title">${res[i].title}</h5>
                                        <p class="card-text">${res[i].overview}.</p>
                                        <a href="#" class="btn btn-primary">${res[i].release_date}</a>
                                        </div>
                                   </div>
                                </div>`                  
        } ;  
  
    }



    
// axios.get(` https://api.themoviedb.org/3/discover/movie?api_key=7843f8d22a43911f15301ef8d76338ae&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`)
//    .then((response) => dispalyMovie(response));
   
  
   
//      let searchinput = document.getElementById("search");
//      let recherche = document.getElementById("recherche");
//      let apikey ="7843f8d22a43911f15301ef8d76338ae";

// recherche.addEventListener('click', (e) =>{
//                e.preventDefault()
//                console.log( e.target.value);

//                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchinput.value}`)
//                          .then(response => dispalyMovie(response))
                         
// })



// let affiche = document.getElementById("affiche")

// function dispalyMovie(response){
//      let res = response.data.results
//      console.log(res);
//      affiche.innerHTML="";
//      for(let i =0; i < res.length; i++){
//           affiche.innerHTML +=
//                               `<div class="card-group col-md-3">
//                                     <div class="card" style="width: 18rem;margin:20px;">
//                                          <img class="card-img-top" src="https:image.tmdb.org/t/p/w500${res[i].backdrop_path}" alt="Card image cap">
//                                          <div class="card-body">
//                                          <h5 class="card-title">${res[i].title}</h5>
//                                          <p class="card-text">${res[i].overview}.</p>
//                                          <a href="#" class="btn btn-primary">${res[i].release_date}</a>
//                                          </div>
//                                     </div>
//                                  </div>`         

//      };
// }



// const req = async() =>{
//      mm = await fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=Gin"?api_key=5a94bae171msh5595950bb9402b3p12b3f3jsn279a7560945d`)
//      .then(response => response.json())
//           // dispalymeals(mm.adult.production_companies);
//        .then(data => console.log(data));
     
// }
// req();

//   let meal = document.getElementById("meal");
//       async function dispalymeals(res){
//        meal.innerHTML = ''
//             for(let i = 0; i < res.length ;i++) {
//                  meal.innerHTML += `<div class="card-group col-md-3">
//                                         <a href="#" class="btn btn-primary">${res[i].id}</a>
//                                      <div class="card" style="width: 18rem;margin:20px;">
//                                           <img class="card-img-top" src="${res[i].logo_path}" alt="Card image cap">
//                                           <div class="card-body">
//                                           <h5 class="card-title">${res[i].name}</h5>
//                                            <p class="card-text">${res[i].origin_country}.</p>
//                                           </div>
//                                      </div>
//                                   </div>`                  
//           } ;  
  
//   }




/* <p class="card-text">${res[i].strCategoryDescription}.</p> */






    


 


               











