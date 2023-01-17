console.clear();

//                                                                      Kintamųjų inicijavimas



// Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

const a = 1;
console.log(a);

const b = 2;
console.log(b);

const c = 3;
console.log(c);

console.log ('_________________________________________________________')
// Sukurti 3 kintamuosius su teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

const menesis1 = 'sausis';
console.log(menesis1);

const menesis2 = 'vasaris';
console.log(menesis2);

const menesis3 = 'kovas';
console.log(menesis3);

console.log ('_________________________________________________________')
// Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
const pazymiai1 = [3, 4, 5, 6, 7];
console.log(pazymiai1);

const pazymiai2 = [10, 8, 6, 4, 2];
console.log(pazymiai2);

const pazymiai3 = [3, 6, 9, 5, 2];
console.log(pazymiai3);

console.log ('_________________________________________________________')
// Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

const klase1 = ['Lukas', 'Matas', 'Nojus', 'Dominykas','Dovydas'];
console.log (klase1);

const klase2 = ['Olivia', 'Emma', 'Charlotte', 'Amelia','Ava'];
console.log (klase2);

const klase3 = ['Tautvydas', 'Donatas', 'Simonas', 'Tajus','Audrone'];
console.log (klase3);

console.log ('_________________________________________________________')

//                                                                      Veiksmai su kintamaisiais

// Susumuoti visus skaičiaus tipo kintamuosius
// Rezultatą išvesti į console

const suma = a + b + c;
console.log (suma);

console.log ('_________________________________________________________')

// Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// Rezultatą išvesti į console

const menesiai = menesis1 + ' ' + menesis2 + ' ' + menesis3 + '.';
console.log(menesiai);

console.log ('_________________________________________________________')

// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// 1-2+3-4+5

let i = 0;

let logika = pazymiai1[0] - pazymiai1[1] + pazymiai1[2] - pazymiai1[3] + pazymiai1[4];

/*
let sum = 0;
let counter = 1;

 for (let i = 0; i < pazymiai1.length; i++) {
    if (counter % 2 === 0) {
      sum -= pazymiai1[i];
    } else {
      sum += pazymiai1[i];
    }
    counter++;
  }
*/

// Rezultatą išvesti į console

console.log(logika);
// console.log(sum);

console.log ('_________________________________________________________')

// Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

klase1.reverse();
console.log(klase1.join (', ')+ '.');

klase2.reverse();
console.log(klase2.join (', ')+ '.');

klase3.reverse();
console.log(klase3.join (', ')+ '.');


console.log ('_________________________________________________________')

//                                                                  Kintamųjų palyginimas

// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.



console.log ('_________________________________________________________')

//                  Tarpusavyje palyginti skaičiaus tipo kintamuosius:

// kuris didesnis
// kuris mažesnis

if (a > b ) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}  

// ar jie lygūs
// ar jie nelygūs

if (a == b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}  
if (a != b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}  
// kuris didesnis arba lygus
// kuris mažesnis arba lygus

if (a <= b) {
    console.log ('Pomidoras');
} else {
    console.log ( 'Bandykite kitą kartą.')
}

//                  Išvesti teksto tipo kintamųjų ilgius

const menesioilgis1 = menesis1.length;
console.log (menesioilgis1);
const menesioilgis2 = menesis2.length;
console.log (menesioilgis2);
const menesioilgis3 = menesis3.length;
console.log (menesioilgis3);

console.log ('_________________________________________________________')
//                  Tarpusavyje palyginti teksto tipo kintamųjų ilgius:


// kuris didesnis
// kuris mažesnis
if ( menesioilgis1 > menesioilgis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

// ar jie lygūs
// ar jie nelygūs
if ( menesioilgis2 == menesioilgis3) {
console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

// kuris didesnis arba lygus
// kuris mažesnis arba lygus

if ( menesioilgis3 <= menesioilgis1) {
    console.log('Pomidoras');
    } else {
        console.log('Bandykite kitą kartą.');
    }

//                  Išvesti sąrašo tipo kintamųjų ilgius

const klasesdydis1 = klase1.length;
    console.log (klasesdydis1);
const klasesdydis2 = klase2.length;
    console.log (klasesdydis2);
const klasesdydis3 = klase3.length;
    console.log (klasesdydis3);

console.log ('_________________________________________________________')
//                  Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
// kuris didesnis
// kuris mažesnis

if ( klasesdydis1 > klasesdydis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

// ar jie lygūs
// ar jie nelygūs

if ( klasesdydis2 == klasesdydis3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

// kuris didesnis arba lygus
// kuris mažesnis arba lygus

if ( klasesdydis3 >= klasesdydis1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}