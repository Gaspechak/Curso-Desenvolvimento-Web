/*
Controle de fluxo é usado para adicionar um pouco de inteligência nas aplicações.
Muito utilizado para controlar quando e o que fazer com base em variaveis diferentes.
*/

var diaAtual = 20;
var diaAniversario = 26;

if (diaAtual == diaAniversario) {
    console.log("Feliz Aniversário !")
} else {
    console.log("Eaew, cadê meu pastel ?")
}

switch (diaAtual) {
    case 20:
        console.log()
        break;
    case 21:
        console.log()
        break;
    default:
        break;
}