const fs = require('fs');
const process = require('process');
const { stdin, stdout } = process;
const path = require('path');
let writeableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));
stdin.on('data', (data) => {
    if (data.toString().trim() == 'exit') {
        process.exit();
    }
    writeableStream.write(data);
});
process.stdin.resume();
process.on('SIGINT', () => {
    process.exit();
});