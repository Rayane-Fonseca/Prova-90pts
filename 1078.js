var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    const N = parseInt(input);

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${N} = ${i * N}`);
    }

    rl.close();
});