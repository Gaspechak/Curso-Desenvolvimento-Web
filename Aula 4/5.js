const p = require('prompt-sync')()

let produto = {
    nome: p('Nome: '),
    descricao: p('Descrição: '),
    marca: p('Marca: '),
    preco: p('Preço: ')
}

console.log(produto)