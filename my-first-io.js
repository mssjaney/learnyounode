'use strict'

const fs = require('fs');

const buf = fs.readFileSync(process.argv[2]);
// const str = buf.toString().split('\n').length - 1;

const shorthand = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;

console.log(shorthand);