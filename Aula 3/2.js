const prompt = require('prompt-sync')()

//2 - Faça um algoritmo que receba três números inteiros e mostre o maior deles.
const alg2 = (n1, n2, n3) => {
    let maior = n1;

    if (n2 > maior) {
        maior = n2;
    }

    if (n3 > maior) {
        maior = n3;
    }

    console.log(`O maior número digitado é: ${maior}`)
}

let n1 = prompt('Digite o primeiro número: ')
let n2 = prompt('Digite o segundo número: ')
let n3 = prompt('Digite o terceiro número: ')

let n1C = parseInt(n1)
let n2C = parseInt(n2)
let n3C = parseInt(n3)

alg2(n1C, n2C, n3C)