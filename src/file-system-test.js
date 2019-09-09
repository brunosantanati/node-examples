const fs = require('fs')

console.log('WRITING...')
fs.writeFileSync('../output/notes.txt', 'Writing text in a file using fs module.')
console.log('APPENDIN...')
fs.appendFileSync('../output/notes.txt', '\nAppending text in a file using fs module.')