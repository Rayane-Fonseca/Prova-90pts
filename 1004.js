var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift());
let Y = parse(lines.shift());

let consumo = (X * Y).toFixed(2);

console.log(`consumo = ${consumo}`).toFixed(2);