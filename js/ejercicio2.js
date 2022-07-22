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
document.write(`<h2>Cantidad de ciudades = ${ciudades.length}</h2>`);
document.write(`<h2>La primera ciudad es ${ciudades[0]}</h2>`);
document.write(`<h2>La tercera ciudad es ${ciudades[2]}</h2>`);
document.write(`<h2>La ultima ciudad es ${ciudades[ciudades.length - 1]}</h2>`);
