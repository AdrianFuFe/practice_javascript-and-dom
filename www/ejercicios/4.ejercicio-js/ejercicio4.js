'use strict';

const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];
console.log(names);

function compareArray (array){
    //recorremos el array
    for (let i=0 ; i<array.length ; i++){
        //recorremos el array desde el indice siguiente al actual
        for(let j=i+1; j<array.length ; j++){
            // comparamos si el valor del indice actual del array es igual al siguiente
            if(array[i] === array[j]){
                //si es igual quitamos ese indice del array
                array.splice(j,1);
            }
        }
    }
    return names
}
console.log(compareArray(names));