const fs = require('fs') //Manipulação de arquivos fisicos
const prompt = require('prompt-sync')() //Input de dados do usuário
const crypto = require('crypto') //Criptografia e manipulação de dados

let opcaoSelecionada = null;

const menuPrincipal = function () {
    const telaInicial = `
    Selecione a opção desejada

    1 - Cadastrar uma Pessoa;
    2 - Cadastrar um Produto;
    0 - Sair;
    :`
    //console.clear()
    console.log(telaInicial)
    opcaoSelecionada = prompt()
}

const cadastrarPessoa = function () {
    
    const listaPessoa = JSON.parse(fs.readFileSync("Pessoa.json"))

    const pessoa = { ID: crypto.randomUUID() }

    pessoa.nome = prompt('Nome Completo: ')
    pessoa.cpf = prompt('CPF: ')
    pessoa.nascimento = prompt('Data de Nascimento: ')
    pessoa.email = prompt('E-mail: ')
    pessoa.telefone = prompt('Telefone: ')

    listaPessoa.push(pessoa)

    fs.writeFileSync('Pessoa.json', JSON.stringify(listaPessoa))

    console.log('Os dados da pessoa foram salvos com sucesso !')
}

const cadastrarProduto = function () {

    const listaProdutos = JSON.parse(fs.readFileSync("Produto.json"))

    const produto = { ID: crypto.randomUUID() }

    console.log("Iniciando um novo cadastro de produto...")

    produto.nome = prompt('Nome do Produto: ')
    produto.descricao = prompt('Descrição: ')
    produto.marca = prompt('Marca: ')
    produto.valorUnitario = prompt('Valor Unitário: ')

    listaProdutos.push(produto)

    fs.writeFileSync('Produto.json', JSON.stringify(listaProdutos))

    console.log("Os dados do produto foram salvos com sucesso !")
}

while (opcaoSelecionada != 0) {
    menuPrincipal()

    if (opcaoSelecionada == 1) {
        cadastrarPessoa()
    } else if (opcaoSelecionada == 2) {
        cadastrarProduto()
    }
}