const quantitat = Number(prompt("Quantitat a pagar (€)"))
if (quantitat >= 30) {
    console.log("El cost total és de " + quantitat + "€ donat que el transport és gratis")
} else {
    console.log("El preu total és " + (quantitat + 4.95).toFixed(2) + "€")
}
