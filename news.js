
//DISTINTO DO ARQUIVO APP.JS / ESSE CODIGO APENAS RETRATA UMA FORMA DE MANIPULAR AS ROTAS ATRAVES DE NODE PURO
//OS DOIS ARQUIVOS TEM A MESMA FUNCIONALIDADE DE GERENCIAR AS ROTAS 

var http = require('http')

http.createServer((req, res) => {
	var category = req.url
	if (category == '/tech') {
		res.end('<h1>ROUTE OF TECH</h1>')
	} else if (category == '/mobile') {
		res.end('<h1>ROUTE OF MOBILE</h1>')
	} else if (category == '/clothing') {
		res.end('<h1>ROUTE OF CLOTHING</h1>')
	} else if (category == '/shoe') {
		res.end('<h1>ROUTE OF SHOE</h1>')
	}
	res.end('<html><body>News portal<body><html>')
}).listen(3000);