'use strict'

const main = document.querySelector('main');
const tds = document.querySelectorAll('td');

const createButton = document.querySelector('button.create');
const addButton = document.querySelector('button.add');

const rows = 4;
const cols = 4;

let countCols= cols;

//crea una tabla con N filas y N columnas segun las variables numRow y numCol 
function createTable(numRow,numCol) {
    const newTable = document.createElement("table");
    main.appendChild(newTable);

    for(let i=0; i<numRow; i++){
        const tr = document.createElement('tr');
        tr.setAttribute("class", `row${i+1}`);
        newTable.appendChild(tr);

        for(let j=0; j<numCol; j++){
            const td = document.createElement('td')
            td.setAttribute("class", `col${j+1}`);
            tr.appendChild(td);
        }
    }
}
//añade la tabla según los parametros indicados en las variables rows y cols
function addTable(){
    const table = document.querySelector('table');
    if(!table){
        createTable(rows,cols);
    }
}

//contador de columnas
//si el contador no ha alcanzado aun el limite suma 1 columna
//si el contador alcanza el limite establecido segun el numero de columnas que nosotros le indicamos en la variable cols vuelve su valor a 1
function refreshCount(){
    if (countCols==cols){
        countCols = 1;
    }else if (countCols < cols){
        countCols += 1;
    }
return countCols;
}

//añade nuevos tds segun la cantidad que le indiquemos en la variable newBoxesAmount 
function newBoxes(){
    //si el contador de columnas llega a su limite crea una fila nueva y un nuevo td y los añade a la tabla
    if (countCols == cols){
        const table = document.querySelector('table');
        
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        
        table.appendChild(tr);
        tr.appendChild(td);    
    }

    //mientras el contador no llegue a su limite crea un nuevo td y lo añade a la ultima fila,
    if (countCols < cols){
        const tr = document.querySelector('tr:last-of-type');
        const td = document.createElement('td');
        tr.appendChild(td);
    }

    //llama a la funcion de actualizar contador para actualizarlo cada vez
    refreshCount();
}

//llama a la funcion de crear tds
function addBoxes(){
    return newBoxes();
}



//variable con valor random segun un parametro maximo
const randomNumber = (max) => Math.floor(Math.random() * max);
//cambia el color de fondo de cada td con un valor de color random con valores rgb de 0 a 255
function changeBackground() {
    const tds = document.querySelectorAll('td');
    for (const td of tds) {
        const color = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
        td.style.backgroundColor = color;
    }
}
setInterval(changeBackground, 1000);


createButton.addEventListener('click', addTable);
addButton.addEventListener('click', addBoxes);