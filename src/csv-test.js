const { parse } = require('json2csv')
const fs = require('fs')

let books = [
    {
        title: 'Desbravando Java e Orientação a Objetos',
        date: '2014-03-18',
        author: 'Rodrigo Turini',
        category: 'PROGRAMMING'
    }, {
        title: 'Explorando APIs e bibliotecas Java',
        date: '2014-03-18',
        author: 'Rodrigo Turini',
        category: 'PROGRAMMING'
    }, {
        title: 'Java 8 Prático',
        date: '2014-03-18',
        author: 'Rodrigo Turini',
        category: 'PROGRAMMING'
    },{
        title: 'Introdução e boas práticas em UX Design',
        date: '2014-06-23',
        author: 'Fabricio Teixeira',
        category: 'DESIGN'
    }, {
        title: 'Conhecendo o Adobe Photoshop CS6',
        date: '2012-06-05',
        author: 'Tárcio Honório Zemel',
        category: 'DESIGN'
    }, {
        title: 'Edição e organização de fotos com Adobe Lightroom',
        date: '2012-06-05',
        author: 'Rafael Giovanni Steil',
        category: 'DESIGN'
    }, {
        title: 'Métricas Ágeis',
        date: '2017-06-02',
        author: 'Raphael Donaire Albino',
        category: 'AGILE'
    }, {
        title: 'Scrum: Gestão ágil para projetos de sucesso',
        date: '2013-06-17',
        author: 'Rafael Sabbagh Armony',
        category: 'AGILE'
    }, {
        title: 'Test-Driven Development',
        date: '2012-09-10',
        author: 'Mauricio Finavaro Aniche',
        category: 'AGILE'
    }, {
        title: 'Direto ao Ponto',
        date: '2015-08-17',
        author: 'Paulo Roberto Celidonio Caroli',
        category: 'BUSINESS'
    }, {
        title: 'Guia da Startup',
        date: '2012-06-05',
        author: 'Joaquim Jose Rodrigues Torres',
        category: 'BUSINESS'
    }, {
        title: 'O Mantra da Produtividade',
        date: '2015-08-05',
        author: 'Dionatan de Souza Moura',
        category: 'BUSINESS'
    }, {
        title: 'Java SE 7 Programmer I',
        date: '2013-01-30',
        author: 'Guilherme de Azevedo Silveira',
        category: 'CERTIFICATION'
    }, {
        title: 'Java SE 8 Programmer I',
        date: '2014-11-05',
        author: 'Mário Amaral',
        category: 'CERTIFICATION'
    }, {
        title: 'Zend Certified Engineer',
        date: '2016-04-22',
        author: 'Matheus Marabesi',
        category: 'CERTIFICATION'
    }
]

const csv = parse(books, {header: false, quote: ''})
fs.writeFileSync('../output/books.csv', csv)
console.log(csv)