//Declaração de variavel com escopo global
var tipo1

//Declaração de variavel com escopo de bloco
let tipo2

//Declaração de variavel com escopo de bloco
const tipo3 = 0


//Porque escopo de bloco ?
if (true) {
    var x = 5;
}
console.log(x) // Resultado: 5

if (true) {
    let y = 5;
}
console.log(y) // Resultado: Error, y não definido.


/* 
JavaScript hoisting

Posso declarar uma variavel após utiliza-lá.
*/
console.log(e === undefined) //Resultado: true
var e = 3;