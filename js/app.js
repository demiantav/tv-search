import { getShows } from "./api.js";

const d= document,
      $search_input= d.querySelector(".search_show"),
      $show_container= d.querySelector(".show-container"),
      $fragment = d.createDocumentFragment();

  console.log("afuera");

d.addEventListener("submit", e => {

    e.preventDefault();

    mostrarProgramas($search_input);
  
})

const mostrarProgramas = async (show) => {

  $show_container.innerHTML= 
   `<div class="metronome">
   <div class="metronome__dot"></div>
   <div class="metronome__dot"></div>
   <div class="metronome__dot"></div>
   <div class="metronome__dot"></div>
 </div>
   `

    const programas = await getShows(`https://api.tvmaze.com/search/shows?q=${show.value}`);

    if(programas.length === 0){

      const er = d.createElement("p");

      er.textContent= `No existen resutados para la busqueda`;
      
      $fragment.appendChild(er);


    }
    
    for(let i = 0; i<programas.length; i++){

      const card= d.createElement("div");
      card.classList.add("card-img");

      if(programas[i].show.image === null){
        
        card.innerHTML=
             `<img src="http://static.tvmaze.com/images/no-img/no-img-portrait-text.png" alt="${programas[i].show.name}" class="show-img"></img>
              <p class="show-title">${programas[i].show.name}<p>
              
             `


      } else{

        card.innerHTML=
             `<img src="${programas[i].show.image.original}" alt="${programas[i].show.name}" class="show-img"></img>
              <p class="show-title">${programas[i].show.name}<p>
              
             `


      }
      
      $fragment.appendChild(card);
    
    }

    $show_container.replaceChildren($fragment);
    console.log("si")
        
}

    
  
