let numero1 = Number(prompt("Escriu el primer numero"))
let numero2 = Number(prompt("Escriu el segon numero"))
let numero3 = Number(prompt("Escriu el tercer numero"))
let aux
if (numero1 > numero2) {
    aux = numero1
    numero1 = numero2
    numero2 = aux
}
if (numero2 > numero3) {
    aux = numero2
    numero2 = numero3
    numero3 = aux
}
if (numero1 > numero2) {
    aux = numero1
    numero1 = numero2
    numero2 = aux
}
console.log(numero1, numero2, numero3)
