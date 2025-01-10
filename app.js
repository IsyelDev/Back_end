import fs from 'fs';

const data = fs.readFileSync('README.md', 'utf8');


const word = data.split(" ");
console.log(word);

const numero = word.length;
console.log(numero);


const contador = data.match(/y/ig).length;
console.log(contador);