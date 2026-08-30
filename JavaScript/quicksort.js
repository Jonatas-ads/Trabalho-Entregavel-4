function quicksort(array, inicio, fim) {

    if (inicio < fim) {

        let pivo = particionar(array, inicio, fim);

        quicksort(array, inicio, pivo - 1);
        quicksort(array, pivo + 1, fim);
    }
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

let numeros = [8, 3, 5, 1, 9, 2];

quicksort(numeros, 0, numeros.length - 1);

console.log("Array ordenado:");
console.log(numeros);