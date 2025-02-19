const {format} = require('date-fns');
const {v4:uuidv4} = require('uuid');




console.log(format(new Date(), 'yyyyMMdd'));

console.log(format(new Date(), "yyyy-MM-dd"));

console.log(uuidv4());





/*
console.log('Hello World')

console.log('Welcome to CBC!');

const now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
*/

