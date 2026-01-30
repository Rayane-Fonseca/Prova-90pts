var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var values = input.split(' ').map(Number);

var a = values[0];

let n = 0;
for (let i = 1; i < values.length; i++) {
    if (values[i] > 0) {
        n = values[i];
        break;
    }
}

let soma = 0;
for (let i = 0; i < n; i++) {
    soma += a + i;
}

console.log(soma);
