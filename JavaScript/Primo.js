function verificarPrimo(n) {

    if (!Number.isInteger(n)) {
        throw new TypeError("O valor deve ser um número inteiro.");
    }

    if (n <= 1) {
        return false;
    }

    let divisores = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisores++;
        }
    }

    return divisores === 2;
}

module.exports = verificarPrimo;
