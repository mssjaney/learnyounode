'use strict'
const { RSA_NO_PADDING } = require('constants');
const http = require('http');

const url = process.argv[2];

http.get(url, (res) => {
    res.setEncoding('utf8');

    let nrChar = 0;
    let sentence = '';

    res.on('data', (chunk) => {
        nrChar += chunk.length;
        sentence += chunk;
    });

    res.on('end', () => {
        console.log(nrChar);
        console.log(sentence);
    }); 
}).on('error', console.error);