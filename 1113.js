var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let line of lines) {
    const [xStr, yStr] = line.split(' ');
    const x = parseInt(xStr);
    const y = parseInt(yStr);

    if (x === y) {
        break;
    }

    if (x < y) {
        console.log('Crescente');
    } else {
        console.log('Decrescente');
    }
}
