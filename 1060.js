var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let positivos = 0;
for (let i = 0; i < 6; i++) {  // Para 6 números
    let num = parseFloat(lines.shift());
    if (num > 0) positivos++;
}
console.log(`${positivos} valores positivos`);