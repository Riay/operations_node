var sum = require('./operations/sum.js')
var multiplication = require('./operations/multiplication.js')
var division = require('./operations/division.js')
var substraction = require('./operations/substraction.js')
var moment = require("moment")
console.log(moment().format("MMM Do YY") )
console.log('the sum of 3 & 4 is : ' + sum(3, 4))
console.log('the multiplication of 3 & 4 is : ' + multiplication(3, 4))
console.log('the division of 3 & 4 is : ' + division(3,4))
console.log('the substraction of 3 & 4 is : ' + substraction(3,4))