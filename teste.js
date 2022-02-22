const fs = require('fs') // -------LER ARQUIVO E SALVAR EM UM VETOR

const nome_arquivo = '/outros/teste.txt'

const path = __dirname + `${nome_arquivo}`

function leitodeArquivo (caminho) {
    fs.readFile(caminho, 'utf-8', function(error, data){ 
    if (error){
        console.log ("erro de leitura")
    } else
    {
        let regra = data.split(",")
        console.log(regra)
    }
    })
}

leitodeArquivo(path)