'use strict';

/* 
function changeText(text){
    pElem.length 
}
*/
/* 
const arrayPalabras = string.split(' ');

const stringConEspacio = array.join(' ');
*/

const pElements = document.querySelectorAll('p');
const textArr=[];
const maxLength =  5;

function textModifier(){

    for (const pElement of pElements){
        textArr.push(pElement.textContent.split(' ')); 
        //expresion regular para cadenas de texto /[A-Za-z]+/
    }
    console.log(textArr);
    
    const cleanTextArr = [];

    for(let i=0; i<textArr.length ; i++){

        for(let j=0 ; j<textArr[i].length ; j++){
            
            /*
            if (textArr[i][j].length > 5){
                textArr[i][j] = `<u>${textArr[j][i]}</u>`;
            } 
            */
            if (textArr[i][j].length > 5) textArr[i][j] = `<u>${textArr[i][j]}</u>`;
        }
        cleanTextArr[i] = textArr[i].join(" ");
    }

    for (let i = 0; i < pElements.length; i++) {
        pElements[i].innerHTML = cleanTextArr[i];
    } 

}


textModifier();