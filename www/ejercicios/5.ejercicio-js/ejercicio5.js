'use strict';

const urlAPI = 'https://rickandmortyapi.com/api/';
const urlEpisodes = 'https://rickandmortyapi.com/api/episode';

const month = 'January';


//funcion de peticion de datos general a api
function fetchData(url){
    return fetch(url)
        .then((response) => response.json())
        .catch((e) => e);
}

async function getEpisodes(){
    //array donde guardaremos los episodios que nos interesen
    const episodesList = [];
    //peticion a la API con la url de los episodios
    let episodes = await fetchData(urlEpisodes);

    //bucle para recorrer el array que nos devuelve la peticion a la API
    episodes.results.forEach((episode) => {
        //filtramos los capitulos que incluyan en la key air_date el mes que nos interesa y los añadimos al array de episodesList
        if(episode.air_date.includes(month)){
            episodesList.push(episode);
        }
    });

    //crear array con arrays de urls de personajes
    const episodeCharList = [];
    for (let i=0 ; i<episodesList.length ; i++){
        if (episodesList[i].characters){
            episodeCharList.push(episodesList[i].characters);
        }
    }
    
    //creamos array con todas las urls de personajes
    const charUrlDuplicated = [];
    for(let j=0 ; j<episodeCharList.length ; j++){
        for(let k=0 ; k<episodeCharList[j].length ; k++){
            charUrlDuplicated.push(episodeCharList[j][k]);
        }
    }
    
    //creamos un nuevo array eliminando las urls duplicadas
    const charUrl = [...charUrlDuplicated];
    for (let n=0 ; n<charUrl.length ; n++){
        for(let m=n+1; m<charUrl.length ; m++){
            if(charUrl[n] == charUrl[m]){
                charUrl.splice(m,1);
            }
        }
    }
    
    async function getCharacters(){
        //array donde guardaremos los personajes que nos interesen
        const charList = [];
        
        //bucle para peticion a la API recorriendo el array con las url de los personajes
        for (let i=0 ; i<charUrl.length  ; i++){
            let characterUrl = await fetchData(charUrl[i]);
            charList.push(characterUrl);
        }
        //array donde guardaremos los nombres de los personajes  
        const charNames = [];
        //recorremos el array de personajes 
        for (let g=0 ; g<charList.length ; g++){
            if(charList[g].name){
                //guardamos los nombres de los personajes en el array indicado
                charNames.push(charList[g].name);
            }
        }
        console.log(charNames);
    }
    getCharacters();
}
getEpisodes();
