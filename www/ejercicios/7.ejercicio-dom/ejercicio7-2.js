'use strict';

//devuelve numero con valor random segun un parametro maximo
function randomNumber(max){
    Math.floor(Math.random() * max);
}
//cambia el color de fondo de cada td con un valor de color random con valores rgb de 0 a 255
function changeBackground() {
    const tds = document.querySelectorAll('td');
    for (const td of tds) {
        const color = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
        td.style.background = color;
    }
}
setInterval(changeBackground, 1000); 

//crea un nuevo tr y un nuevo td y los añade a la tabla existente
function newTd(){
    const tableBody = document.querySelector('tbody')
    
    const tr = document.createElement('tr');
    const td = document.createElement('td')
    
    tr.appendChild(td);
    tableBody.appendChild(tr);
}


const addButton = document.querySelector('button.add');
addButton.addEventListener('click', newTd);