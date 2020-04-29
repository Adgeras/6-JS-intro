"use strict"

function tusciaFunkcija(){
    return false;
}
console.log( tusciaFunkcija ());

// ***********No. 2 - daugyba 

function daugyba (pirmas, antras) { 
    // 1. pradžiai validuojame įeinančius dalykus
    if (typeof(pirmas) !== 'number'){
        return console.error ('ERROR: pirma reiksme turi buti skaicius');
    }
    if (typeof antras !== 'number'){
        return 'ERROR: antra reiksme turi buti skaicius';
    }
    // 2.  realizuojame funkcijos logika
    const result = pirmas * antras
    // 3.  graziname funkcijos rezultata
    console.log(result);
    
    return result;
}

console.log(daugyba ());
console.log(daugyba (2, 2) );
console.log(daugyba (3, 5) );
console.log(daugyba (-0, -5) );
console.log(daugyba ('pie', -5) );
console.log(daugyba ('pie', 'labas') );
console.log(daugyba (1, 'labas') );

console.log('*****SKAITMENU**************')
console.log('********KIEKIS***********')
console.log('**********SKAICIUJE*********')

function skaitmenuKiekisSkaiciuje( number ){
    // validavimas
    if (typeof(number) !== 'number' ||
        isFinite(number) === false ) {
        return console.error('ERROR: reikalingas tikras skaicius');
    }
        
    // logic
    const skaiciusTekstu = ''+number;
    const count = skaiciusTekstu.length;

    // if ( skaicius ) {
    //     count--;
    // }

    // jei tekstineje skaiciaus reprezenatacijoje yra kablelis, tai count--
    for(let i=0; i<skaiciusTekstu.length; i++) {
        if (skaiciusTekstu[i] === '.') {
            count--
        }
    }

    
    // result return
    return count;
}
console.log( skaitmenuKiekisSkaiciuje(Infinity));
console.log( skaitmenuKiekisSkaiciuje(NaN));
console.log( skaitmenuKiekisSkaiciuje(455));
console.log( skaitmenuKiekisSkaiciuje(5554));
console.log( skaitmenuKiekisSkaiciuje(55555.55555));