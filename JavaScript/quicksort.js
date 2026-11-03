function quicksort(array, inicio, fim) {

    if (!Array.isArray(array)) {
        throw new TypeError("O valor deve ser um array.");
    }

    if (!array.every(numero => Number.isFinite(numero))) {
        throw new TypeError("O array deve conter apenas números válidos.");
    }

    if (!Number.isInteger(inicio) || !Number.isInteger(fim)) {
        throw new TypeError("Os índices devem ser números inteiros.");
    }

    if (inicio < 0 || fim >= array.length) {
        throw new RangeError("Os índices estão fora dos limites do array.");
    }

    if (inicio >= fim) {
        return array;
    }

    let pivo = particionar(array, inicio, fim);

    quicksort(array, inicio, pivo - 1);
    quicksort(array, pivo + 1, fim);

    return array;
}

function particionar(array, inicio, fim) {

    let pivo = array[fim];
    let i = inicio - 1;

    for (let j = inicio; j < fim; j++) {

        if (array[j] <= pivo) {

            i++;

            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    let temp = array[i + 1];
    array[i + 1] = array[fim];
    array[fim] = temp;

    return i + 1;
}

module.exports = quicksort;
