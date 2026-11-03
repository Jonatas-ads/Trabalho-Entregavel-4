function fibonacci(n) {

    if (!Number.isInteger(n) || n < 0) {
        throw new TypeError("A quantidade deve ser um número inteiro não negativo.");
    }

    let a = 0;
    let b = 1;
    let sequencia = [];

    for (let i = 0; i < n; i++) {
        sequencia.push(a);

        let proximo = a + b;

        a = b;
        b = proximo;
    }

    return sequencia;
}

module.exports = fibonacci;
