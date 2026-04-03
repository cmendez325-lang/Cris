//tarea 1
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
//tarea 2
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}
//tarea 3
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
//tare4
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i; 
}
console.log("La suma total es: " + suma);

for (let i = 1; i <= 4; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += i; 
    }
    console.log(linea);
}