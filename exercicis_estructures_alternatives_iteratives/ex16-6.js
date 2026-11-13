const N = Number(prompt("Escriu un numero"))
let suma = 0
for (let i = 2; i <= N; i = i + 2) {
    suma = suma + i
}
console.log(suma)
