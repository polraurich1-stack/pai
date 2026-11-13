const tipus = prompt("Vols un conus (c) o una terrina (t)?").toLowerCase()
const sabor = Number(prompt("Sabor: 1 Vainilla o Xocolata, 2 Turró, Menta o Oreo, 3 Crema, Gerds o Ametlles"))
let preu = 0
let increment = 0
let valid = true
if (tipus === "c") {
    preu = 3.45
} else if (tipus === "t") {
    preu = 3.95
} else {
    valid = false
}
switch (sabor) {
    case 1:
        increment = 0
        break
    case 2:
        increment = 0.5
        break
    case 3:
        increment = 1
        break
    default:
        valid = false
}
if (valid) {
    console.log("El preu final és " + (preu + increment).toFixed(2) + "€")
} else {
    console.log("Error dades mal introduïdes")
}
