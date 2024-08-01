const fs = require('fs');
const path = require('path');
require('dotenv').config();

const filePath = path.join(__dirname, 'index.html');
const apiKey = process.env.OPEN_API_KEY;

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    const result = data.replace('__API_KEY__', apiKey);

    fs.writeFile(filePath, result, 'utf8', (err) => {
        if (err) return console.log(err);
    });
});
