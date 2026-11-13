const carnet = prompt("Té carnet de conduir? (s/n)")
const alcoholemia = Number(prompt("Quin valor ha sortit a la prova d'alcoholèmia?"))
if (carnet === "s" && alcoholemia < 0.25) {
    console.log("Sí pot conduir")
} else {
    console.log("No pot conduir")
}
