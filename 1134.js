var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let alcool = 0;
let gasolina = 0;
let diesel = 0;

for (var line of lines) {
    var codigo = parseInt(line);

    if (codigo === 1) {
        alcool++;
    } else if (codigo === 2) {
        gasolina++;
    } else if (codigo === 3) {
        diesel++;
    } else if (codigo === 4) {
        break; 
    }
}

console.log('MUITO OBRIGADO');
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);
