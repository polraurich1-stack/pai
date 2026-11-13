let i = 0
let maxim = 0
do {
    const numero = Number(prompt("Escriu un numero"))
    if (i === 0 || numero > maxim) {
        maxim = numero
    }
    i++
} while (i < 10)
console.log("El número més gran és " + maxim)
