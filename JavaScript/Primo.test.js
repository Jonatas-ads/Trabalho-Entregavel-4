const verificarPrimo = require("./Primo");

test("Deve identificar 7 como número primo", () => {
    expect(verificarPrimo(7)).toBe(true);
});

test("Deve identificar 8 como número não primo", () => {
    expect(verificarPrimo(8)).toBe(false);
});

test("Deve retornar false para números menores ou iguais a 1", () => {
    expect(verificarPrimo(1)).toBe(false);
    expect(verificarPrimo(-5)).toBe(false);
});

test("Deve apresentar erro quando receber um valor que não seja inteiro", () => {
    expect(() => verificarPrimo(7.5)).toThrow(TypeError);
    expect(() => verificarPrimo("banana")).toThrow(TypeError);
});
