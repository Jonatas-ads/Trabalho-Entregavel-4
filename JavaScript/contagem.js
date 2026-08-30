let n = 5;
let numeros = [1, 3, 7, 2, 9];

let contador = 0;

for (let numero of numeros) {

    if (numero >= 1 && numero <= n) {
        contador++;
    }
}

console.log("Quantidade: " + contador);