var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = Number(lines.shift());
let dentro = 0;
let fora = 0;

for(let i = 0; i < n; i++) {
    const numero = Number(lines.shift());
    if(numero >= 10 && numero <= 20) {
        dentro++;
    } else {
        fora++;
    }
}

console.log(`${dentro} in`);
console.log(`${fora} out`);