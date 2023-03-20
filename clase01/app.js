
//alert('Hola Mundo desde JavaScript')

const nombre = prompt("¿Cual es tu nombre?")

document.querySelector("#contenido").innerHTML = `<h1 class='mt-5'>Bienvenido(a) ${nombre} a las Clases de JavaScript</h1><p></p>`

console.log(nombre)
console.info(nombre) // informativo
console.error(nombre) // error de codigo
console.warn(nombre)  //mensaje de advertencia

console.time("JS")  //inicia el conteo de tiempo de la ejecucion de las siguientes lineas

console.warn('Cuidado valores no definidos correctamente')
console.warn('Cuidado valores no definidos correctamente')
console.warn('Cuidado valores no definidos correctamente')
console.warn('Cuidado valores no definidos correctamente')
console.warn('Cuidado valores no definidos correctamente')
console.warn('Cuidado valores no definidos correctamente')

console.timeEnd("JS") // finaliza y muestra el tiempo de ejecución
