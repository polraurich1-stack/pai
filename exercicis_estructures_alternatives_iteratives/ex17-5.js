const N = Number(prompt("Escriu el primer numero (N)"))
const M = Number(prompt("Escriu el segon numero (M)"))
let i = 1
let text = ""
while (i <= M) {
    let producte = N * i
    if (i > 1) {
        text = text + ", "
    }
    text = text + producte
    if (producte > 999999) {
        break
    }
    i++
}
console.log(text)
