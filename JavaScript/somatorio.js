function somatorio(n) {

    if (!Number.isInteger(n) || n < 0) {
        throw new TypeError("O valor deve ser um número inteiro não negativo.");
    }

    let soma = 0;

    for (let i = 1; i <= n; i++) {
        soma = soma + i;
    }

    return soma;
}

module.exports = somatorio;
