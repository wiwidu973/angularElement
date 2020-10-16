const fs = require('fs-extra');
const concat =require('concat');

(async function build(){
  const files = [
    './dist/socialapp/runtime.js',
    './dist/socialapp/polyfills.js',
    './dist/socialapp/main.js',
  ]

await fs.ensureDir('elements');
await concat(files, 'elements/social-buttons.js');
await fs.copyFile('./dist/socialapp/styles.css', 'elements/styles.css');
})()
