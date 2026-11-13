const N = Number(prompt("Escriu un numero"))
let a = 1
let b = 1
while (a <= N) {
    console.log(a)
    let seguent = a + b
    a = b
    b = seguent
}
