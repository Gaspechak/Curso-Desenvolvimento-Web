const prompt = require('prompt-sync')()

const alg3 = (n) => {
    let resultado

    if (n == 0) {
        resultado = "Zero"
    } else if (n % 2 == 0) {
        resultado = "Par"
    } else {
        resultado = "Impar"
    }

    console.log("O número digitado é " + resultado)
}

let resultado = prompt('Digite um número inteiro: ')
let resConvertido = parseInt(resultado)

alg3(resConvertido)