"use strict";

/*
kintamuju tipai:
 - const - konstanta
 - let - keičiama reikšmė
 - var - skirtumai nuo let: var yra seniau atsiradęs.
 */

const manoVardas = 'Edgaras'; //tekstas
const akiuSkaicius = 2;       // skaičius
const turiGalva = true;       // logine reiksme: TRUE arba FALSE
const mokaSkraidyti = false;
const petriukopazymiai = [];            //tuscias sarasas
const marytesPazymiai = [10, -8, 2.57]; //ne tuscias sarasas
const abc = ['a', 'b', 'c', 'd', 'e', 'f']; // sarasas su tekstais

console.log( manoVardas );
console.log( akiuSkaicius );
console.log( turiGalva );
console.log( mokaSkraidyti );
// console.log( petriukopazymiai);
// console.log( petriukoPazymiai);
console.log( marytesPazymiai);
console.log (abc);


let megstamasSkaicius = 5;
console.log( 'Megstamas skaicius:', megstamasSkaicius);

megstamasSkaicius = 3;
console.log( 'Megstamas skaicius:', megstamasSkaicius);

megstamasSkaicius = 7;
console.log( 'Megstamas skaicius:', megstamasSkaicius);

const belekoksSarasas = [5, 'asd', true, false, [18, '-asfdg']];
console.log(belekoksSarasas)