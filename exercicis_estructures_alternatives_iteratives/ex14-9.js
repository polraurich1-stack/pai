const tipus = prompt("Vols un conus (c) o una terrina (t)?").toLowerCase()
const sabor = Number(prompt("Sabor: 1 Vainilla o Xocolata, 2 Turró, Menta o Oreo, 3 Crema, Gerds o Ametlles"))
if ((tipus !== "c" && tipus !== "t") || (sabor !== 1 && sabor !== 2 && sabor !== 3)) {
    console.log("Error dades mal introduïdes")
} else {
    let preu = 3.95
    if (tipus === "c") {
        preu = 3.45
    }
    if (sabor === 2) {
        preu = preu + 0.5
    }
    if (sabor === 3) {
        preu = preu + 1
    }
    console.log("El preu final és " + preu.toFixed(2) + "€")
}
