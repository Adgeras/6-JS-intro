"use strict;"

/*matematines operacijos */
const sk1 = 27;
const sk2 = 3;

const suma = sk1 + sk2;
console.log( suma );

const skirtumas = sk1 - sk2;
console.log( skirtumas );

const sandauga = sk1 * sk2;
console.log( sandauga );

const dalmuo = sk1 / sk2;
console.log( dalmuo );

console.log( suma - skirtumas * (sandauga + sk2) );
console.log('------tekstines operacijos------------------------')

/*tekstines operacijos */

const vardas = 'Vardenis';
const pavarde = "Pavardenis";
const pilnasVardas = vardas + ' ' + pavarde;

console.log(vardas);
console.log(pavarde);
console.log(pilnasVardas);

// Mano megstama spalva yra "juoda".
const spalva = 'raudona';
const spalvosSakinys = 'Mano megstama spalva yra "' + spalva + '".'
console.log( spalvosSakinys );


//Skaicius '20' yra lyginis.
const skaicius = 20;
const skaiciausSakinys = "Skaicius '" + skaicius + "' yra lyginis.";
console.log(skaiciausSakinys);


//Skaicius '2' ir skaicius "trys" yra geri skaiciai.
// `` = back tik'as

const du = 2;
const trys = 'trys';
const sakinys = `Skaicius '${du}' ir skaicius "trys" yra geri skaiciai.`;
console.log(sakinys);

console.log('------**************------------------------')
console.log('------Sarasu operacijos (array)------------------------')
/*Sarasu operacijos (array)*/

const pazymiai = [10, 8, 7, 6, 4, 8];
const abcd = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(pazymiai);
console.log(abcd);

console.log('Pirmas pazymys:', pazymiai[0]);
// console.log('Antras pazymys:', pazymiai[1]);
// console.log('Trecias pazymys:', pazymiai[2]);
// console.log('Ketvirtas pazymys:', pazymiai[3]);
// console.log('Penktas pazymys:', pazymiai[4]);
// console.log('Sestas pazymys:', pazymiai[5]);
// console.log('Septintas pazymys:', pazymiai[6]); //neapibrėžta


console.log('Pirma raide:', abcd[0]);
const pazymiuSuma = pazymiai[0]+pazymiai[1]+pazymiai[2]

console.log('Pazymiu suma:', pazymiuSuma);

let abcSakinys = '';
abcSakinys = abcSakinys + abc[0];
console.log('Visa ABC:', abcSakinys);

abcSakinys = abcSakinys + abc[1];
console.log('Visa ABC:', abcSakinys);

abcSakinys = abcSakinys + abc[2];
console.log('Visa ABC:', abcSakinys);



