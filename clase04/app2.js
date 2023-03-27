let nombre = 'Raul Piña'
let edad = 19
let estadoCivil = 'soltero'
let email = 'perro58462@gmail.com'

console.log(nombre)

//Cuenta los carateres de una cadena de string
console.log(nombre.length)


//unir string con variables
console.log('Candidato: ' + nombre + ' de ' + edad + ' de edad, ' + estadoCivil + ' y puedes mandarle un mensaje a este correo: ' + email)


//Template String
console.log(`Candidato: ${nombre} de ${edad} de edad, ${estadoCivil} y puedes mandarle un mensaje a este correo: ${email}`)

//cortar espacios en blanco
let producto = "           Monitor de 28\" LG ";

console.info(producto.trimStart())
console.info(producto.trimEnd())
console.info(producto.trim())


// convertir a Mayusculas o Minusculas

let cliente = "Raul piñA"

console.info(cliente.toUpperCase())
console.info(cliente.toLowerCase())


//Metodo 'Repeat' y ' Split'


//repeat te permite repetir una cadena de text 'n' veces
let correo = 'raulp@gmail.com '

console.log(correo.repeat(4))

//Split, separa o divide un String

const festividad = "Esta semana se festeja el dia del 'taco' en México"

console.log(festividad.split(" "))


const hoy = '27/03/2023'

console.info(hoy.split("/"))

