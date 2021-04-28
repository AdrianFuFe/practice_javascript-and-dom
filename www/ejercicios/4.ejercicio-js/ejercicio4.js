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


function compareArray (array){
    for (let i=0 ; i<array.length ; i++){
        for(let j=i+1; j<array.length ; j++){
            if(array[i] == array[j]){
                array.splice(j,1);
            }
        }
    }
    return names
}
console.log(compareArray(names));


function removeDuplicates(array){
    let name = array.reduce(function (a,b){
        if (a.indexOf(b)<0) a.push(b);
        return a;
    },[]);
    return name;
    // array.reduce((acc,curr) => acc.includes(curr) ? acc : [...acc, curr], []);
}
console.log(removeDuplicates(names));