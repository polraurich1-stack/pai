const N = Number(prompt("Escriu un numero"))
let divisors = 0
let i = 1
do {
    if (N % i === 0) {
        divisors++
    }
    i++
} while (i <= N)
if (divisors === 2) {
    console.log("El número és primer")
} else {
    console.log("El número no és primer")
}
