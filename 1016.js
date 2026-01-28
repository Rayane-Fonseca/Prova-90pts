var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines.shift());

let tempo = (2 * x);

console.log(`${tempo} minutos`);