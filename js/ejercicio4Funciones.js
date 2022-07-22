function crearTabla(numero){
    let tabla = [];
    for(i=1; i<=10;i++){
        tabla.push(numero * i);
    }
    document.write("<ul>");
    for(i=0; i<tabla.length;i++){
    document.write(`<li>${tabla[i]}</li>`)
    }
    document.write("</ul>");
}
let numeroIngresado;
do{
    numeroIngresado = parseInt(prompt("Ingreso un numero"));
    if(!isNaN(numeroIngresado)){
        tabla = crearTabla(numeroIngresado);
    } else {
        alert("Ingrese un numero valido");
    }
}while(isNaN(numeroIngresado))