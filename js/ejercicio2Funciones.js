function clasificarTexto(texto){
    let textoClasificado = "";
    let textoEnMinuscula = texto.toLowerCase();
    let textoEnMayusculas = texto.toUpperCase();
    if(texto===textoEnMinuscula){
        textoClasificado = "El texto esta todo en miniscula";
    } else if (texto===textoEnMayusculas){
        textoClasificado = "El texto esta todo en mayuscula";
    } else {
        textoClasificado = "El texto contiene mayusculas y minusculas";
    }
    return textoClasificado;
}
let textoIngresado = prompt("Ingrese un texto");
let clasificacion = clasificarTexto(textoIngresado);
document.write(clasificacion);