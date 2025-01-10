import fs from 'fs';

const data = fs.readFileSync('README.md', 'utf8');
const reemplazo = data.replace(/Clona/ig, 'Mazo');
fs.writeFileSync('README01.md', reemplazo);




