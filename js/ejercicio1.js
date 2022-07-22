let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
document.write("<ul>");
for(let indice = 0; indice < meses.length; indice++){
    document.write(`<li>${meses[indice]}</li>`);
}
document.write("</ul>");