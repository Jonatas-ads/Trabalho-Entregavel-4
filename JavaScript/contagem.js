function contagem(n, numeros) {

    if (!Number.isInteger(n) || n < 0) {
        throw new TypeError("O limite deve ser um número inteiro não negativo.");
    }

    if (!Array.isArray(numeros)) {
        throw new TypeError("O segundo valor deve ser um array.");
    }

    if (!numeros.every(numero => Number.isFinite(numero))) {
        throw new TypeError("O array deve conter apenas números válidos.");
    }

    let contador = 0;

    for (let numero of numeros) {

        if (numero >= 1 && numero <= n) {
            contador++;
        }
    }

    return contador;
}

module.exports = contagem;
