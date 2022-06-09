//DISTINTO DO ARQUIVO NEWS.JS / ESSE CODIGO APENAS RETRATA UMA FORMA DE MANIPULAR AS ROTAS ATRAVES DO EXPRESS PURO
//OS DOIS ARQUIVOS TEM A MESMA FUNCIONALIDADE DE GERENCIAR AS ROTAS 

var express = require('express');
var app = express()

app.get('/', (req, res) => {
    res.send('<h1>RETORNO HOME</h1>')
})

app.get('/tech', (req, res) => {
    res.send('<h1>RETORNO TECH</h1>')
})

app.get('/mobile', (req, res) => {
    res.send('<h1>RETORNO TECH</h1>')
})


app.listen(3000, () => {
    console.log("Server run with express");
})
