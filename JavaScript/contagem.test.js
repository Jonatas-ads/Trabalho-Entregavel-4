const contagem = require("./contagem");

test("Deve contar números entre 1 e 5", () => {
    let numeros = [1, 3, 7, 2, 9];

    expect(contagem(5, numeros)).toBe(3);
});

test("Deve retornar zero quando nenhum número estiver no intervalo", () => {
    let numeros = [6, 7, 8, 9];

    expect(contagem(5, numeros)).toBe(0);
});

test("Deve retornar zero quando o limite for zero", () => {
    expect(contagem(0, [1, 2, 3])).toBe(0);
});

test("Deve apresentar erro quando o limite for inválido", () => {
    expect(() => contagem(-5, [1, 2, 3])).toThrow(TypeError);
    expect(() => contagem(2.5, [1, 2, 3])).toThrow(TypeError);
    expect(() => contagem("5", [1, 2, 3])).toThrow(TypeError);
});

test("Deve apresentar erro quando receber algo que não seja um array", () => {
    expect(() => contagem(5, "banana")).toThrow(TypeError);
});

test("Deve apresentar erro quando o array possuir valores inválidos", () => {
    expect(() => contagem(5, [1, "banana", 3])).toThrow(TypeError);
    expect(() => contagem(5, [1, null, 3])).toThrow(TypeError);
});
