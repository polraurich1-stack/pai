const N = Number(prompt("Escriu el primer numero (N)"))
const M = Number(prompt("Escriu el segon numero (M)"))
let serie = ""
let terme = 0
let suma = 0
for (let i = 1; i <= M; i++) {
    terme = terme * 10 + N
    serie = serie + terme + " "
    suma = suma + terme
}
console.log(serie)
console.log("La suma de la sèrie és:" + suma)
