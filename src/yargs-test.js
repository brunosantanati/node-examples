const yargs = require('yargs')

//Customize yargs version. Use example: node .\yargs-test.js --version
yargs.version('1.1.0')

//Exemplo para ver o argv do yargs(passando argumentos): node .\yargs-test.js add --title="My title"
console.log(yargs.argv)

//yargs também aceita --help: node .\yargs-test.js --help