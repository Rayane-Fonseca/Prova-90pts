var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const x = parseInt(lines[0]);
const y = parseInt(lines[1]);

const start = Math.min(x, y);
const end = Math.max(x, y);

let soma = 0;

for (let i = start; i <= end; i++) {
    if (i % 13 !== 0) {
        soma += i;
    }
}

console.log(soma);
