var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) {
    const [aStr, bStr, cStr] = lines[i].split(' ');
    const a = parseFloat(aStr);
    const b = parseFloat(bStr);
    const c = parseFloat(cStr);
    
    const media = (a * 2 + b * 3 + c * 5) / 10;
    console.log(media.toFixed(1));
}