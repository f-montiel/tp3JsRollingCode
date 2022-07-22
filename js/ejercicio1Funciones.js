function clasificarNumeros(numero){
    let clasificacion = numero % 2;
    if(clasificacion == 0){
        return "Par";
    } else {
        return "Impar";
    }
}
let numeroIngresado;
do{
    numeroIngresado = parseInt(prompt("Ingrese un numero"));
    if(!isNaN(numeroIngresado)){
        document.write(clasificarNumeros(numeroIngresado));
    } else {
        alert("Ingrese un numero");
    }
}while(isNaN(numeroIngresado))