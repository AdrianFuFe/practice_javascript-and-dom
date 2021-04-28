'use strict';

function temporizador (num){
    //creamos las variables para cada uno de los datos que queremos mostrar
    let s=0;
    let m=0;
    let h=0;
    let d=0;
    console.log(`${d} dias ${h} horas ${m} inutos ${s} segundos`); //imprimimos nuestro temporizador a 0
    
    //creamos un intervalo al que le asignaremos un tiempo determinado para que repita nuestra funcion actualizando cada vez los valores que le indicamos
    const intervalo = setInterval (() => {
        s += num; //aumenta los segundos la cantidad que le indicamos segun el parametro num
        
        //condicion para que al llegar a 60 o mas cambie 60s por 1min, el resto de variables igual
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
        const tiempo = `${d} dias ${h} horas ${m} minutos ${s} segundos`; //imprimir nuestro contador cada vez que se actualiza

    }, num * 1000);  //multiplicamos por el parametro num para establecer cada cuantos segundos se actualiza nuestra funcion

    document.querySelector('h1').innerHTML = tiempo;

    return tiempo
}


//llamada a la funcion
temporizador (5);