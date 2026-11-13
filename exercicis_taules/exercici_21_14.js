let array1 = [1,2,3];
let array2 = [2,3,4];
if (array1.length === array2.length) {
    let suma = [];
    for (let i = 0; i < array1.length; i++) {
        suma[i] = array1[i] + array2[i];
    }
    console.log(suma);
} else {
    console.log("Els arrays tenen mides diferents");
}
