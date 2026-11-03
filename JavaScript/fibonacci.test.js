const fibonacci = require("./fibonacci");

test("Deve gerar os 5 primeiros números de Fibonacci", () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
});

test("Deve gerar os 7 primeiros números de Fibonacci", () => {
    expect(fibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
});

test("Deve retornar um array vazio quando receber zero", () => {
    expect(fibonacci(0)).toEqual([]);
});

test("Deve apresentar erro para valores inválidos", () => {
    expect(() => fibonacci(-3)).toThrow(TypeError);
    expect(() => fibonacci(2.5)).toThrow(TypeError);
    expect(() => fibonacci("oi")).toThrow(TypeError);
});
