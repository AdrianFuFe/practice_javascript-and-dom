'use strict';

const pElements = document.querySelectorAll('p');
const textArr=[];
const maxLength =  5;

function textModifier(){
    //bucle añadiendo en cada indice un array con cada elemento de los parrafos separando por espacios en blanco
    for (const pElement of pElements){
        textArr.push(pElement.textContent.split(' ')); 
        //expresion regular para cadenas de texto /[A-Za-z]+/
    }
    /* console.log(textArr); */

    //recorremos los arrays dentro del array textArr  
    for(let i=0; i<textArr.length ; i++){
        for(let j=0 ; j<textArr[i].length ; j++){
            //comparamos el tamaño del contenido de cada indice de los arrays con la longitud maxima marcada
            if (textArr[i][j].length > maxLength){
                //si es mayor que la longitud marcada devuelve una cadena de texto con el mismo palabra entre etiquetas de subrayado de html 
                textArr[i][j] = `<u>${textArr[i][j]}</u>`;
            } 
        }
        //convertimos los arrays con las palabras ya modificadas de nuevo en cadenas de texto, uniendolas dejando espacios en blanco entre ellas
        textArr[i] = textArr[i].join(" ");
    }

    //bucle actualizando el contenido de los <p> del html por el contenido de nuestro array
    for (let i = 0; i < pElements.length; i++) {
        pElements[i].innerHTML = textArr[i];
    } 
}

textModifier();