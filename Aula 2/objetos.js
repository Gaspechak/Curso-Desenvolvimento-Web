/* 
Objetos ou JSON no javascript é uma forma de organizar dados utilizando suas propriedades e ações.
*/

let pessoa = {
    Nome: "Fulano de tal",
    Idade: 45,
    CPF: "000000000",
    andar: () => {
        console.log("Pessoa andando...")
    },
    filmesFavoritos: ["Interestelar", "Iron Man 1"],
    musicasFavoritas: [
        {
            Nome: "Mockingbird",
            Artista: "Eminem"
        },
        {
            Nome: "Journeyman",
            Artista: "Iron Maiden"
        }
    ]
}

console.log(pessoa)
console.log(pessoa.Nome)
pessoa.andar()