var validator = require('validator');

console.log(validator.isEmail('foo@bar.com'))
console.log(validator.isEmail('@bar.com'))

console.log(validator.isURL('https://github.com/brunosantanati/'))
console.log(validator.isURL('https:github.com/brunosantanati/'))