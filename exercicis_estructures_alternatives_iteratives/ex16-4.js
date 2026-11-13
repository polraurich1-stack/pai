const N = Number(prompt("Escriu un numero"))
let factorial = 1
for (let i = 1; i <= N; i++) {
    factorial = factorial * i
}
console.log(factorial)
