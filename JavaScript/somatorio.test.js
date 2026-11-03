const somatorio = require("./somatorio");

test("Deve calcular o somatório de 5", () => {
    expect(somatorio(5)).toBe(15);
});

test("Deve calcular o somatório de 10", () => {
    expect(somatorio(10)).toBe(55);
});

test("Deve retornar zero quando receber zero", () => {
    expect(somatorio(0)).toBe(0);
});

test("Deve apresentar erro para valores inválidos", () => {
    expect(() => somatorio(-5)).toThrow(TypeError);
    expect(() => somatorio(2.5)).toThrow(TypeError);
    expect(() => somatorio("oi")).toThrow(TypeError);
});
