'use strict';

//accedemos a los elementos del DOM que luego vamos a necesitar
const startButton = document.querySelector('button.start');
const stopButton = document.querySelector('button.stop');
const resetButton = document.querySelector('button.reset');
const reloj = document.querySelector('h1');

//creamos variables para los datos que vamos a utilizar
let c = 0;
let s = 0;
let m = 0;
let h = 0;
let time = `${h}:${m}:${s}:${c}`;


let crono = null; //variable que luego utilizamos para el intervalo
let cronoRun = false; //estado del crono true=activo false=pausado

/*
function format(num){
    if(num < 10){
        return '0' + num;
    }
    return num;
}
*/


//formateo del crono para mostrar los tiempos crorrectamente
//si las centesimas llegan a 100 suma 1seg y las cent vuelven a 0
//si los seg llegan a 60 suma 1min y los seg vuelven a 0
//si los min llegan a 60 suma 1h y los min vuelven a 0
function showCrono(){

    if(c > 99){
        s++;
        c=0;
        if (s == 60){
            m++;
            s = 0;
            if(m == 60){
                h++;
                m = 0;
            }
        }
    }

    time = `${h}:${m}:${s}:${c}`;
    return reloj.innerHTML = time;
}

//suma el tiempo al crono y utiliza el formateo del crono para mostrarlo 
//sumamos 1 unidad a las centesimas cada vez
function countCrono (){
    c++;
    showCrono();
}

//START si el crono esta parado ejecuta el intervalo que repite la funcion de contador del crono
function startCrono(){
    if (cronoRun == false){
        crono = setInterval(countCrono,10);
        cronoRun = true;
    }
}

//STOP si el crono esta en marcha detiene el intervalo y cambia el estado del crono 
function stopCrono(){
    if( cronoRun = true){
    clearInterval(crono);
    crono = null;
    cronoRun=false;
    }
}

//RESET si el crono esta en marcha lo para, además cambia todos los valores a 0 y los cambia en el elemento html
function resetCrono(){
    if (cronoRun = true){
        stopCrono();
    }
        c=0;
        s=0;
        m=0;
        h=0;
        time = `0${h}:0${m}:0${s}:0${c}`;
        reloj.innerHTML = time;
}



//añadimos las funciones correcpondientes a cada boton
startButton.addEventListener('click', startCrono);
stopButton.addEventListener('click', stopCrono);
resetButton.addEventListener('click',resetCrono);
