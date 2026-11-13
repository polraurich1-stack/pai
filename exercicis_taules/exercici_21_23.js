function Auto(marca, modelo, potencia, antiguedad , precio) {
   this.marca = marca;
   this.modelo = modelo;
   this.potencia = potencia;
   this.antiguedad = antiguedad;
   this.precio = precio;

}

let miAuto = new Auto("Seat","Ibiza",90,2010,5000);
let otroAuto = new Auto("Opel","Astra",92,1995,500);

let masAntiguo = miAuto;
if (otroAuto.antiguedad < miAuto.antiguedad) {
    masAntiguo = otroAuto;
}
console.log("Modelo: " + masAntiguo.modelo);
console.log("Marca: " + masAntiguo.marca);
