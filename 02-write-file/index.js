const fs = require('fs');
const process = require('process');
const { stdin, stdout } = process;
const path = require('path');
const { Console } = require('console');
let writeableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));
console.log("Здравствуйте, введите текст");
stdin.on('data', (data) => {
    if (data.toString().trim() == 'exit') {
        console.log("Вы вышли из программы");
        process.exit();
    }
    console.log("продолайте вводить текст");
    writeableStream.write(data);
});
process.stdin.resume();
process.on('SIGINT', () => {
    console.log("Вы вышли из программы");
    process.exit();
});