'use strict'
const http = require('http');

let results = []
let count = 0

function printResults () {
    for (let i = 0; i < 3; i++) {
      console.log(results[i]);
    }
}

function httpGet (index) {
    http.get(process.argv[2 + index], (res) => {
        res.setEncoding('utf8');

        let sentence = '';

        res.on('data', (data) => {
            sentence += data;
            results[index] = sentence;
        });

        res.on('end', () => {
            count ++;

            if (count === 3) {
                printResults();
            }
        });
    });
}

for (let i = 0; i < 3; i++) {
    httpGet(i)
}
