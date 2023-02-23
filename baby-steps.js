'use strict'

let total = 0;

process.argv.forEach((val, index) => {
  if(index >= 2) {
    total += Number(val);
  }
});

console.log(total);
