'use strict'

const fs = require('fs');
const path = require('path');

const readDirFiles = (dir, ext, callback) => {
    fs.readdir(dir, function(err, files) {
        const filesFiltered = [];

        if (err) {
            return callback(err);
        }
    
        files.forEach((file) => {
            const extCheck = '.' + ext;
            
            if(path.extname(file) === extCheck) {
                filesFiltered.push(file);
            }
        });

        callback(null, filesFiltered);
    });
};

module.exports = readDirFiles;