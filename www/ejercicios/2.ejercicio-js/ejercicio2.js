'use strict';

//variable para indica cada cuantos segundos queremos imprimir nuestro contador 
const valorIntervalo = 5; 

//declaramos las variables de nuestro temporizador a 0
let s=0;
let m=0;
let h=0;
let d=0;

//creamos temporizador con valor inicial 0 y lo mostramos en consola y en nuestro doc html
let tiempo = `${d} dias : ${h} horas : ${m} minutos : ${s} segundos`;
console.log(tiempo);
document.querySelector('h1').innerHTML = tiempo;


//Resetea el contador de segundos, minutos y horas al alcanzar su maximo, configurado para que si cambiamos valorIntervalo contabilice correctamente
function resetearTemp (){
    if (s >= 60){
        m++;
        s = s-60;
        if(m >= 60){
            h++;
            m = m-60;
            if(h >= 24){
                d++;
                h = h-24;
            }
        }
    }
}


function actualizarTemp (){
    //suma a los segundos de nuestro temporizador el valor que le indicado en valorIntervalo, 
    s += valorIntervalo;
    resetearTemp();
    
    //imprime en consola y actualiza en el html el temporizador
    console.log(`${d} dias : ${h} horas : ${m} minutos : ${s} segundos`);
    tiempo = `${d} dias : ${h} horas : ${m} minutos : ${s} segundos`;
    document.querySelector('h1').innerHTML = tiempo;
}

//establece el intervalor en que actualiza el temporizador en segundos segun el valor indicado en valorIntervalo
setInterval(actualizarTemp,valorIntervalo*1000);