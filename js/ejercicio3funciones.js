function calcularPerimetro(ancho, alto){
    let perimetro = 2 * (ancho + alto);
    return perimetro;
}
let perimetroRectangulo;
let ancho;
let alto;
do{
    ancho = parseInt(prompt("Ingrese el ancho del rectangulo"));
    alto = parseInt(prompt("Ingrese el alto del rectangulo"));
    if(!isNaN(ancho) && !isNaN(alto)){
        perimetroRectangulo = calcularPerimetro(ancho, alto);
    } else {
        alert("Ingrese el ancho y el alto del rectagulo");
    }
}while(isNaN(ancho) || isNaN(alto))
document.write("El perimetro del rectangulo es: " + perimetroRectangulo);