// Declaración de variables con let

let producto = "Equipo de Escritorio DELL"


/* las variables con let se puede modificar el valor pero no volver a declarar
    let nombre = "Raul"
    let nombre ="Piña"


    el Scope (alcance) de 'let' es menor al de 'var', pues let vive en el bloque donde se define y 
    'var' es global
*/

let saludo = "Hola desde JavaScript..."

if(true){
    let saludo = "Hoy es un buen dia para programar..."
    console.log(saludo)
}

console.log(saludo)


var mensaje = "JavaScript el lenguaje mas usado en el mundo"

if(true){
    var mensaje = "JavaScript permite crear aplicaciones moviles"
    console.log(mensaje)
}

console.log(mensaje)



/*
    Declaracion de 'Constantes' con la palabra reservada 'const'
    La constante no cambia de valor y al momento de declararla se debe inicializar
*/

const DESCRIPCION = "Curso de JavaScript 2023"
console.log(DESCRIPCION)

const PI = 3.1416

PI = "AK47"
console.log(PI)

