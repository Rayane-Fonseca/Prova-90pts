var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

let MEDIA = ((2 * A + 3 * B + 5 * C) / 10).toFixed(1);

console.log(`MEDIA = ${MEDIA}`);
