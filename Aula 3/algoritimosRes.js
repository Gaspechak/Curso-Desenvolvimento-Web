//1 - Escreva um algoritmo que mostre o número successor e antecessor de um valor especifícado na variavel.
const alg1 = (numeroBase) => {
    let antecessor = numeroBase - 1;
    let successor = numeroBase + 1;

    console.log(`O Antecessor de ${numeroBase} é ${antecessor} e o sucessor é ${successor}`)
}


//2 - Faça um algoritmo que receba três números inteiros e mostre o maior deles.
const alg2 = (n1, n2, n3) => {
    let maior = n1;

    if (n2 > maior) {
        maior = n2
    }

    if (n3 > maior) {
        maior = n3
    }

    console.log(maior)
}


//3 - Faça um algoritimo que receba um número e mostre se é impar ou par
const alg3 = (n) => {
    let resultado

    if (n % 2 == 0) {
        resultado = "Par"
    } else {
        resultado = "Impar"
    }

    console.log(resultado)
}