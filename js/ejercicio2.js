let ciudades = [];
do{
    let ciudad = prompt("Ingrese una ciudad");
    ciudades.push(ciudad);
}while(confirm("¿Quiere ingresar otra ciudad?"))
document.write("<h1>Ciudades</h1>");
document.write("<ul>");
for(let indiceCiudades = 0; indiceCiudades<ciudades.length; indiceCiudades++){
    document.write(`<li>${ciudades[indiceCiudades]}</li>`);
}
document.write("</ul>");
document.write(`<p>Cantidad de ciudades = ${ciudades.length}</p>`);
document.write(`<p>La primera ciudad es ${ciudades[0]}</p>`);
document.write(`<p>La tercera ciudad es ${ciudades[2]}</p>`);
document.write(`<p>La ultima ciudad es ${ciudades[ciudades.length - 1]}</p>`);
