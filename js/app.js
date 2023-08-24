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

    const programas = await getShows(`https://api.tvmaze.com/search/shows?q=${show.value}`);
    
    for(let i = 0; i<programas.length; i++){

      const card= d.createElement("div");
      card.classList.add("card-img");

      if(programas[i].show.image === null){
        
        card.innerHTML=
             `<p>${programas[i].show.name}</p>
             `


      } else{

        card.innerHTML=
             `<img src="${programas[i].show.image.original}" alt="${programas[i].show.name}" class="show-img"></img>
              <p>${programas[i].show.name}</p>
              <p>${programas[i].show.summary}</p>
             `


      }
      
      $fragment.appendChild(card);
    
    }

    $show_container.appendChild($fragment);
        
}

    
  
