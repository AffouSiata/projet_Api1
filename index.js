
//  const req = async() => {
//       images = await fetch(` https://api.themoviedb.org/3/discover/movie?api_key=7843f8d22a43911f15301ef8d76338ae&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`)
//       .then(reponse => reponse.json())
//       dispalyMovie(images.results)
      
//   }
// req();


//   let searchinput = document.getElementById("search");
//   let recherche = document.getElementById("recherche");
//   let apikey ="7843f8d22a43911f15301ef8d76338ae";

// recherche.addEventListener('click', (e) =>{
//      e.preventDefault()
//      console.log( e.target.value);
     
//      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchinput.value}`)
//           .then(reponse => reponse.json())
//           .then(data => {
//                // console.log(data)
//                dispalyMovie(data.results)
//           })
         
          

//      })
// let img = document.getElementById("img");
//     async function dispalyMovie(res){
//      img.innerHTML = ''
//           for(let i = 0; i < res.length ;i++) {
//                img.innerHTML += `<div class="card-group col-md-3">
//                                    <div class="card" style="width: 18rem;margin:20px;">
//                                         <img class="card-img-top" src="https:image.tmdb.org/t/p/w500${res[i].backdrop_path}" alt="Card image cap">
//                                         <div class="card-body">
//                                         <h5 class="card-title">${res[i].title}</h5>
//                                         <p class="card-text">${res[i].overview}.</p>
//                                         <a href="#" class="btn btn-primary">${res[i].release_date}</a>
//                                         </div>
//                                    </div>
//                                 </div>`                  
//         } ;  
  
//     }



    
axios.get(` https://api.themoviedb.org/3/discover/movie?api_key=7843f8d22a43911f15301ef8d76338ae&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`)
   .then((response) => dispalyMovie(response));
   
  
   
     let searchinput = document.getElementById("search");
     let recherche = document.getElementById("recherche");
     let apikey ="7843f8d22a43911f15301ef8d76338ae";

recherche.addEventListener('click', (e) =>{
               e.preventDefault()
               console.log( e.target.value);

               axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchinput.value}`)
                         .then(response => dispalyMovie(response))
                         
})



let affiche = document.getElementById("affiche")

function dispalyMovie(response){
     let res = response.data.results
     console.log(res);
     affiche.innerHTML="";
     for(let i =0; i < res.length; i++){
          affiche.innerHTML +=
                              `<div class="card-group col-md-3">
                                    <div class="card" style="width: 18rem;margin:20px;">
                                         <img class="card-img-top" src="https:image.tmdb.org/t/p/w500${res[i].backdrop_path}" alt="Card image cap">
                                         <div class="card-body">
                                         <h5 class="card-title">${res[i].title}</h5>
                                         <p class="card-text">${res[i].overview}.</p>
                                         <a href="#" class="btn btn-primary">${res[i].release_date}</a>
                                         </div>
                                    </div>
                                 </div>`         

     };
}




    


 


               











