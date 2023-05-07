const fs = require('fs');
const path = require('path');
const copyWay =  path.resolve('04-copy-directory', 'files-copy');
const fsPromise = require('fs/promises');
fs.mkdir(copyWay, { recursive: true }, err => {
    if(err) throw err;
  });
async function copyFiles(){
    try {
      const copies = await fsPromise.readdir('04-copy-directory/files-copy', {withFileTypes: true});
      for (let copy of copies){
        fs.unlink(`04-copy-directory/files-copy/${copy.name}`, function(err){
          if (err) {
            console.log('Error:', err);
          } else {
            console.log('Файл ' + copy.name + ' удалён');
          }
        });
      }
      const item = await fsPromise.readdir('04-copy-directory/files', {withFileTypes: true});
      for (const items of item) {
        if (items.isFile()){
          fs.copyFile(`04-copy-directory/files/${items.name}`, `04-copy-directory/files-copy/${items.name}`, (err) => {
            if (err) {
              console.log('Error:', err);
            }
          });
        }
      }
    } catch(err) {
      console.log(('Error:', err));
    }
  }
  copyFiles();