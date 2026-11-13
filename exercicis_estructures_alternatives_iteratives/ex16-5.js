const N = Number(prompt("Escriu el primer numero"))
const M = Number(prompt("Escriu el segon numero (més gran que N)"))
let suma = 0
for (let i = N; i <= M; i++) {
    suma = suma + i
}
console.log(suma)
