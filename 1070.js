var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift());

let count = 0;
let i = X;

while (count < 6){

    if (i % 2 !== 0){
        console.log(i);
        count ++;
    }
    i++
}