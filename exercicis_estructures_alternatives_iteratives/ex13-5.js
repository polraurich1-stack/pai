const numero1 = Number(prompt("Escriu el primer numero"))
const numero2 = Number(prompt("Escriu el segon numero"))
const numero3 = Number(prompt("Escriu el tercer numero"))
if (numero1 >= numero2 && numero1 >= numero3) {
    console.log(numero1)
}
if (numero2 > numero1 && numero2 >= numero3) {
    console.log(numero2)
}
if (numero3 > numero1 && numero3 > numero2) {
    console.log(numero3)
}
