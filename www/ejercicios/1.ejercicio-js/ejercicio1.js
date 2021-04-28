'use strict';

//url de API que vamos a consultar
const urlUsers = 'https://randomuser.me/api/';
//numero de usuarios que queremos crear 
const numUsers = 8;


//funcion de peticion de datos general a api
function fetchData(url){
    return fetch(url)
        .then((response) => response.json());
}

//funcion para crear usuarios segun numero indicado por parametros
async function createUsers(num){
    //llamada a funcion de peticion de datos de API a la indicada en 
    fetchData(urlUsers);
    //array donde incluiremos nuestros usuarios
    const arrUsers = [];
    //bucle para crear un usuario el nmumero de veces indicado en el parametro
    for (let i=0; i<num; i++){
        
        const response = await fetchData(urlUsers);
        //creamos objeto de usuario con las keys indicadas
        const user = {};
        user.username = response.results[0].login.username;
        user.nombre = response.results[0].name.first;
        user.apellido = response.results[0].name.last;
        user.sexo = response.results[0].gender;
        user.pais = response.results[0].location.country;
        user.email = response.results[0].email;
        user.foto = response.results[0].picture.large;
        //añadimos el objeto de usuario al array
        arrUsers.push(user);
    } 
    return console.log(arrUsers);
}

createUsers(numUsers);