const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
    res.end()
})

app.get('/pessoas', (req, res) => {
    res.send({
        Nome: "Pessoa teste"
    })
    res.end()
})

app.post('/pessoas', (req, res) => {
    let obj = req.body
    res.status(200).send(`A pessoa ${obj.Nome} foi cadastrada com sucesso !`)
})

//Query Parameters
app.delete('/pessoas', (req, res) => {
    let id = req.query.ID
    res.status(200).send(`A pessoa de id ${id} foi removida com sucesso !`)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})