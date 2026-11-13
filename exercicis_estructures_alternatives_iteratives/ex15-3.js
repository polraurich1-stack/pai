const lletra = prompt("Escriu la lletra del dia de la setmana (l, m, x, j, v, s, d)").toLowerCase()
switch (lletra) {
    case "l":
    case "m":
    case "x":
    case "j":
    case "v":
        console.log("El dia és laborable")
        break
    case "s":
    case "d":
        console.log("El dia és festiu")
        break
    default:
        console.log("Error dades mal introduïdes")
}
