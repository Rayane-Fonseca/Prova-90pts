var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift());
let Y = parseFloat(lines.shift()).toFixed(1);

let consumo = (X / Y).toFixed(3);

console.log(`${consumo} km/l`);