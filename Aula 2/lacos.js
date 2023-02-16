/* 
Laços de repetição oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.
*/

//FOR
for (let passo = 0; passo < 5; passo++) {
    // Executa 5 vezes, com os valores de passos de 0 a 4.
    console.log('Ande um passo para o leste');
}

//DO..WHILE
let i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5)


//WHILE
n = 0;
x = 0;
while (n < 3) {
    n++;
    x += n;
}

// LOOP INFINITO
// while (true) {
//     console.log("Olá, mundo");
// }

var items = ["Arroz", "Feijão", "Trigo"]

for (let item in items) {
    console.log(item)
}