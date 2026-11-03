const quicksort = require("./quicksort");

test("Deve ordenar um array de números", () => {
    let numeros = [8, 3, 5, 1, 9, 2];

    expect(quicksort(numeros, 0, numeros.length - 1))
        .toEqual([1, 2, 3, 5, 8, 9]);
});

test("Deve ordenar um array que já está ordenado", () => {
    let numeros = [1, 2, 3, 4, 5];

    expect(quicksort(numeros, 0, numeros.length - 1))
        .toEqual([1, 2, 3, 4, 5]);
});

test("Deve apresentar erro quando receber algo que não seja um array", () => {
    expect(() => quicksort("banana", 0, 5)).toThrow(TypeError);
});

test("Deve apresentar erro quando o array possuir valores inválidos", () => {
    expect(() => quicksort([3, "banana", 1], 0, 2)).toThrow(TypeError);
    expect(() => quicksort([3, null, 1], 0, 2)).toThrow(TypeError);
});

test("Deve apresentar erro quando os índices forem inválidos", () => {
    expect(() => quicksort([3, 2, 1], -1, 2)).toThrow(RangeError);
    expect(() => quicksort([3, 2, 1], 0, 5)).toThrow(RangeError);
});
