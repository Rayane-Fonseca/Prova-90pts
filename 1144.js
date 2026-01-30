var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const N = parseInt(input.trim());

for (let i = 1; i <= N; i++) {
    const i2 = i * i;
    const i3 = i * i * i;

    console.log(`${i} ${i2} ${i3}`);
    
    console.log(`${i} ${i2 + 1} ${i3 + 1}`);
}
