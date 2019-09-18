const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
/*console.log(bookJSON)

const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)*/

fs.writeFileSync('../output/json1.json', bookJSON)

const dataBuffer = fs.readFileSync('../output/json1.json')
const dataJSON = dataBuffer.toString() 
//console.log(dataJSON)
const data = JSON.parse(dataJSON)
console.log(data.title)

// challenge

const obj = JSON.parse(fs.readFileSync('../output/json1-1.json').toString())
obj.name = 'Bruno'
obj.age = 32
fs.writeFileSync('../output/json1-1.json', JSON.stringify(obj))