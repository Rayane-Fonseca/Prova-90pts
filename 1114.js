var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    const senha = parseInt(lines[i]);
    
    if (senha === 2002) {
        console.log('Acesso Permitido');
        break;
    } else {
        console.log('Senha Invalida');
    }
}
