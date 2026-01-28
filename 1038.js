var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [codigo, quantidade] = lines.shift().split(' ').map(Number);

let preco;
if      (codigo === 1) preco = 4.00;
else if (codigo === 2) preco = 4.50;
else if (codigo === 3) preco = 5.00;
else if (codigo === 4) preco = 2.00;
else if (codigo === 5) preco = 1.50;

let total = (preco * quantidade).toFixed(2);

console.log(`Total: R$ ${total}`);
