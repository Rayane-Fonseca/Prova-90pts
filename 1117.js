var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let notasValidas = 0;
let soma = 0.0;

for (var line of lines) {
    var nota = parseFloat(line);

    if (nota < 0 || nota > 10) {
        console.log('nota invalida');
    } else {
        soma += nota;
        notasValidas++;

        if (notasValidas === 2) {
            var media = soma / 2;
            console.log(`media = ${media.toFixed(2)}`);
            break;
        }
    }
}
