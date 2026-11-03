function mdc(a, b) {

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError("Os valores devem ser números inteiros.");
    }

    a = Math.abs(a);
    b = Math.abs(b);

    if (a === 0 && b === 0) {
        throw new RangeError("O MDC de zero e zero não está definido.");
    }

    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }

    return a;
}

module.exports = mdc;
