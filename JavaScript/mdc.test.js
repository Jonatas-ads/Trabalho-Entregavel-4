const mdc = require("./mdc");

test("Deve calcular o MDC de 12 e 18", () => {
    expect(mdc(12, 18)).toBe(6);
});

test("Deve calcular o MDC de 20 e 30", () => {
    expect(mdc(20, 30)).toBe(10);
});

test("Deve calcular corretamente quando receber números negativos", () => {
    expect(mdc(-12, 18)).toBe(6);
    expect(mdc(12, -18)).toBe(6);
});

test("Deve apresentar erro para valores que não sejam inteiros", () => {
    expect(() => mdc(2.5, 10)).toThrow(TypeError);
    expect(() => mdc("banana", 10)).toThrow(TypeError);
});

test("Deve apresentar erro quando os dois valores forem zero", () => {
    expect(() => mdc(0, 0)).toThrow(RangeError);
});
