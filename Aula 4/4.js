const p = require('prompt-sync')()

let pessoa = {
    nome: p('Nome Completo: '),
    cpf: p('CPF: '),
    email: p('E-mail: '),
    telefone: p('Telefone: '),
    endereco: p('Endereço: ')
}

console.log(pessoa)