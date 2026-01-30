var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) {
    const [xStr, yStr] = lines[i].split(' ');
    const x = parseInt(xStr);
    const y = parseInt(yStr);

    let start = Math.min(x, y);
    let end = Math.max(x, y);

    let soma = 0;
    for (let j = start + 1; j < end; j++) {
        if (j % 2 !== 0) {
            soma += j;
        }
    }

    console.log(soma);
}
