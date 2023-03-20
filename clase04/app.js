const producto = 'Monitor 24 pulgadas\'';

const producto2 = String("Monitor 24 pulgadas\"")

const producto3 = new String("Monitor de 24 pulgadas")

console.log(producto)
console.log(producto2)
console.log(producto3)
// --------------

console.log("total de letras", producto.length)

console.log(producto.indexOf("pulgadas"))

console.log(producto.includes('24')) //falso o verdadero (false o true)
console.log(producto.includes('Mexico'))
console.log(producto.includes('pulgadas')) //distingue entre mayucsulas y minusculas

// Concatenar String & Templates String ============================================

let precio = "200 USD";

console.log(producto.concat(precio))
console.log(producto.concat('Oferta Limitada a 10 unidades'))


console.info("El producto" + producto + ", precio de:" + precio + "Oferta Limitada a 10 unidades")

console.info(`El producto ${producto}, precio de ${precio} Oferta limitada a 10 unidades`)

// Espacios en blanco ============================================

let nombre = "              Raul Piña ";

console.info(nombre)
console.info(nombre.length)
console.log(nombre.trimStart())//quita espacio de la izquierda
console.log(nombre.trimEnd()) //quita espacio de la derecha
console.log(nombre.trimStart().trimEnd())//quita espacio de ambos lados

console.log(nombre.trim()) //quita espacio de ambos lados


// Replace, Slice, SubString, Repeat ============================================
let alumno = "Raul Piña Rios" 

console.info(alumno.replace("Rios", "Lopez"));
console.info(alumno.replace(" ", "-"));

let prod = "Monitor de 32\""

console.log(prod.replace('Monitor', 'Monitor curvo'))

console.log(prod.slice(7, 1))
console.log(prod.substring(7, 4))

let texto = "Mi nombre es"
console.log(texto.repeat(4))

console.log(producto.split(" "))

texto = "20/03/2023"

console.log(texto.split("/"))

let hobbies = "Leer, caminar, bailar, escuchar musica, ver televisión, dormir"

console.log(hobbies.split(","))



// Mayusculas y minusculas ============================================

console.log(alumno.toUpperCase()) //pasar a mayusculas
console.log(alumno.toLowerCase()) //pasar a minusculas

let correo = "RAULPSR@HOTMAIL.COM"

console.log(correo.toLowerCase())


// Conversion a String

let numero = 99;

console.log(numero)

console.log(numero + 101)



console.log(numero.toString())

console.log(numero.toString() + 101)
