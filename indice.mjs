import {agregarSuperheroes, leerSuperheroes} from './utils.mjs';

const archivoOriginal = './superheroes.txt';
const archivoNuevo = './agregarSuperheroes.txt';

agregarSuperheroes(archivoOriginal,archivoNuevo);

const superheroes = leerSuperheroes(archivoOriginal);

console.log('Superhéroes ordenados:');
console.log(superheroes);