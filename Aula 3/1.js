const prompt = require('prompt-sync')()
//import prompt from 'prompt-sync';

const alg1 = (numeroBase) => {
    let antecessor = numeroBase - 1;
    let successor = numeroBase + 1;
    console.log(`O antecessor de ${numeroBase} é ${antecessor} e o successor é ${successor}`)
}

let usuarioDigitou = prompt("Digite um número inteiro: ")
let inteiroConvertido = parseInt(usuarioDigitou)

alg1(inteiroConvertido)