let resultados = [];
let cantidadDeApariciones = [0,0,0,0,0,0,0,0,0,0,0];
for(let i = 0; i < 50; i++){
    let dado1 = Math.trunc(Math.random() * (6 + 1 - 1) + 1);
    let dado2 = Math.trunc(Math.random() * (6 + 1 - 1) + 1);
    let resultado = dado1 + dado2;
    resultados.push(resultado);
}
for(let i=0; i<resultados.length; i++){
    if(resultados[i]==2){
        cantidadDeApariciones[0] = cantidadDeApariciones[0] + 1;
    }
    if(resultados[i]==3){
        cantidadDeApariciones[1] = cantidadDeApariciones[1] + 1;
    }
    if(resultados[i]==4){
        cantidadDeApariciones[2] = cantidadDeApariciones[2] + 1;
    }
    if(resultados[i]==5){
        cantidadDeApariciones[3] = cantidadDeApariciones[3] + 1;
    }
    if(resultados[i]==6){
        cantidadDeApariciones[4] = cantidadDeApariciones[4] + 1;
    }
    if(resultados[i]==7){
        cantidadDeApariciones[5] = cantidadDeApariciones[5] + 1;
    }
    if(resultados[i]==8){
        cantidadDeApariciones[6] = cantidadDeApariciones[6] + 1;
    }
    if(resultados[i]==9){
        cantidadDeApariciones[7] = cantidadDeApariciones[7] + 1;
    }
    if(resultados[i]==10){
        cantidadDeApariciones[8] = cantidadDeApariciones[8] + 1;
    }
    if(resultados[i]==11){
        cantidadDeApariciones[9] = cantidadDeApariciones[9] + 1;
    }
    if(resultados[i]==12){
        cantidadDeApariciones[10] = cantidadDeApariciones[10] + 1;
    }
}
document.write("<h1>Cantidad de Apariciones</h1>")
document.write(`Cantidad de veces que aparecio el 2: ${cantidadDeApariciones[0]} <br>
Cantidad de veces que aparecio el 3: ${cantidadDeApariciones[1]} <br>
Cantidad de veces que aparecio el 4: ${cantidadDeApariciones[2]} <br>
Cantidad de veces que aparecio el 5: ${cantidadDeApariciones[3]} <br>
Cantidad de veces que aparecio el 6: ${cantidadDeApariciones[4]} <br>
Cantidad de veces que aparecio el 7: ${cantidadDeApariciones[5]} <br>
Cantidad de veces que aparecio el 8: ${cantidadDeApariciones[6]} <br>
Cantidad de veces que aparecio el 9: ${cantidadDeApariciones[7]} <br>
Cantidad de veces que aparecio el 10: ${cantidadDeApariciones[8]} <br>
Cantidad de veces que aparecio el 11: ${cantidadDeApariciones[9]} <br>
Cantidad de veces que aparecio el 12: ${cantidadDeApariciones[10]} <br>

`)