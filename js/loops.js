"use strict";

// ciklas - kazkasa kas yra kartojama
    // kas tas kazkas?
    // ka kartoja?
    // kiek kartu?


// priskyrimas, if salyga, ciklo operatoriaus padidinimas
// ( let i=0; i<5; i++)

for ( let i=0; i<5; i++) {
    console.log('Skaicius:',i);
}

let k=0
console.log(k);

k--;
console.log(k);

let pazymys = 7;
pazymys = pazymys + 1;
pazymys++;
console.log(pazymys);

console.log('*******SUMAVIMAS INTERVALE*****');

// for (let i= 0; i<10; i++) {
//     console.log(i);
    
// }

const nuo = -70;
const iki = 30;
let suma = 0;

for (let i=nuo; i<=iki; i++) {
    suma = suma + i;
}

console.log('Suma:', suma);

console.log('*******************');
console.log('*******ATBULAS*****');
console.log('*******TEKSTAS*****');

       
        let tekstas = 'alus';
        let tekstoIlgis = tekstas.length;
        console.log(tekstoIlgis);
        let atbulas = '' ;


        for (let i=tekstoIlgis-1; i>=0; i--) {
            atbulas = atbulas + tekstas[i];
            // console.log(atbulas);
        }
        console.log('Tekstas','"'+tekstas+'"','atbulai yra','"'+atbulas+'".');
        
        
    console.log('*******************');
    console.log('*******4-3****');
    console.log('*****************');        

    //Kiek intervale yra skaiciu kurie dalijasi is 3,5,7 be liekanos?
    // 0-11, 8-31, -18 - 18;

 
 const pr = -18;
 const pb = 18;
 const dal = 3;
 const dal1 = 5;
 const dal2 = 7;
 var ats1 = 0;
 var ats2 = 0;
 var ats3 = 0;

 for (let i = pr; i <=pb; i++) {
        let liekana3, liekana5, liekana7 = 0;
        liekana3 = i % dal;
        liekana5 = i % dal1;
        liekana7 = i % dal2;
        // console.log(liekana3, liekana5, liekana7);
            if (liekana3 === 0) {
                ats1++ ;
            }           
            if (liekana5 === 0) {
                ats2++ ;
            }           
            if (liekana7 === 0) {
                ats3++ ;
            }           
        }

  console.log('Skaičių intervale tarp', pr, 'ir', pb+', besidalijančių be liekanos iš', dal, 'yra', ats1, 'vienetai');
  console.log('Skaičių intervale tarp', pr, 'ir', pb+', besidalijančių be liekanos iš', dal1, 'yra', ats2, 'vienetai');
  console.log('Skaičių intervale tarp', pr, 'ir', pb+', besidalijančių be liekanos iš', dal2, 'yra', ats3, 'vienetai');

  console.log('*******************');
  console.log('***Rimanto dalyba be liekanos*');
  console.log('*****************');  

  //Kiek intervale yra skaiciu kurie dalijasi is 3,5,7 be liekanos?
    // 0-11, 8-31, -18 - 18;

    const from = 0;
    const till = 11;
    const divider = 3;
    let counter = 0;

    for (let i = from; i <=till; i ++) {
            if (i % divider === 0) {
                counter++ ;
            }           
         }

    // count = (till - from) / divider
    const answer = `Skaičių intervale tarp ${from} ir ${till}, besidalijančių be liekanos iš ${divider} yra ${counter} vienetai`;
    console.log(answer)

