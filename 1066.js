let pares = 0, impares = 0, positivos = 0, negativos = 0;

for (let i = 0; i < 5; i++) {
    let num = parseInt(lines.shift());
    if (num % 2 === 0) pares++;
    else impares++;
    if (num > 0) positivos++;
    else if (num < 0) negativos++;
}

console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);