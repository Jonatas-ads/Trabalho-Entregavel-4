let a = 12;
let b = 18;

while (b !== 0) {
    let resto = a % b;
    a = b;
    b = resto;
}

console.log("MDC: " + a);