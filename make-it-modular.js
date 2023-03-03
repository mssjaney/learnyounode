'use strict'

const myModuleFn = require('./my-module.js');

let dir = process.argv[2];
let ext = process.argv[3];

myModuleFn(dir, ext, function (err, data) {
    if (err) {
        return console.error('There is an error: ', err);
    }

    data.forEach(file => {
        console.log(file);
    });
});