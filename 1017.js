var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempo = parseInt(lines.shift());
let velocidade = parseInt(lines.shift());

let distancia = (tempo * velocidade);
let consumo = (distancia / 12).toFixed(3);

console.log(`${consumo}`);