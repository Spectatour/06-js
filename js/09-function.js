console.clear ();









function sudetis(a, b) {
    return a + b;
}

const s1 = sudetis(7, 5);
console.log(`7 + 5 = ${s1}`);

const s2 = sudetis(17, -8);
console.log(`17 + -8 = ${s2}`);



function arLyginis(skaicius) {
    if (skaicius % 2 === 0) {
        return 'lyginis'
    }
    return 'ne lyginis'

}

const l1 = arLyginis (7);
console.log(`7 yra ${l1}`);

const l2 = arLyginis (88);
console.log(`88 yra ${l2}`);

console.log('_____________________________');

function average(marks) {
    let sum = 0;
    for (let i=0; i<marks.length; i++){
        sum += marks[i];
    }
    return sum / marks.length;
    
}

const petras = [ 10, 2, 8, 4, 6];
const maryte = [ 10, 9, 8, 7];
const jonas = [2, 3, 4, 5];
const ona = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

console.log('Petras: ', average(petras), petras);
console.log('Maryte: ', average(maryte), maryte);
console.log('Jonas: ', average(jonas), jonas);
console.log('Ona: ', average(ona), ona);


console.log('_____________________________');

function skirtumas(a, b) {
    //jeigu a yra ne skaicius
        // grazinti: klaida..

    //jeigu b yra ne skaicius
        // grazinti: klaida..
    if (typeof a !== 'number'){
        return 'Klaida pirmas parametras turi buti skaicius'
    }
    if (typeof b !== 'number'){
        return 'Klaida antras parametras turi buti skaicius'
    }
        
    return a - b;
}

console.log(skirtumas(7, 5));
console.log(skirtumas(17, 5));
console.log(skirtumas(-17, 5));
console.log(skirtumas('labasS', 5));    // klaida..
console.log(skirtumas(5, 'labasS'));    // klaida..
console.log(skirtumas(8, 'ezys'));   // klaida..
console.log(skirtumas('ezys', 8));   // klaida..


// Mano : 1000
// Tavo: 1000

// Mano: 50

// Mano: 1000 - -50
// Tavo: 1000 + -50