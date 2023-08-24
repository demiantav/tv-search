export async function getShows(uri){

    try {

        const res = await fetch(uri),
              show = await res.json();
          
          return show;
        
    } catch (error) {

        console.log(error);
        
    }
    
}