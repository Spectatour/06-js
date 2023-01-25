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

let logika1 = pazymiai1[0] - pazymiai1[1] + pazymiai1[2] - pazymiai1[3] + pazymiai1[4];
console.log (logika1)

let logika2 = pazymiai2[0] - pazymiai2[1] + pazymiai2[2] - pazymiai2[3] + pazymiai2[4];
console.log (logika2)

let logika3 = pazymiai3[0] - pazymiai3[1] + pazymiai3[2] - pazymiai3[3] + pazymiai3[4];
console.log (logika3)


let logika4 = 0;
let counter = 1;

 for (let i = 0; i < pazymiai1.length; i++) {
    if (counter % 2 === 0) { // pirmu ciklu, jeigu dalijasi su liekana, bus `-`, jeigu dalijasi be liekanos bus`+` .
      logika4 -= pazymiai1[i];
    } else {
      logika4 += pazymiai1[i];
    }
    counter++;
  }
console.log(logika4)

// Rezultatą išvesti į console

console.log(logika1);
console.log(logika2);
console.log(logika3);
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
console.log ('________________________Ciklo for panaudojimas_________________________________')

//                                                                          
// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
console.log ('___________________0 … 0____________________________________')

let sum = 0

for (let i = 0; i <= 0; i++) {
    sum += i;
}
    console.log('suma = ', sum );

console.log ('___________________0 … 4____________________________________')

let sum1 = 0

for (let i = 0; i <= 4; i++) {
    sum1 += i;
}
    console.log('suma = ', sum1 );
    

console.log ('___________________0 … 100____________________________________')

let sum2 = 0

for (let i = 0; i <= 100; i++) {
    sum2 += i;
}
  console.log('suma: ',sum2);


console.log ('___________________574 … 815____________________________________')

let sum3 = 0

for (let i = 574; i <= 815; i++) {
    sum3 += i;
}
    console.log('suma = ', sum3 );


console.log ('___________________-50 … 50____________________________________')

let sum4 = 0

for (let i = -50; i <= 50; i++) {
    sum4 += i;
}
    console.log('suma = ', sum4 );


console.log ('___________________-70 … 30____________________________________')

let sum5 = 0

for (let i = -70; i <= 30; i++) {
    sum5 += i;
}
    console.log('suma = ', sum5 );


// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// pvz.: “abcdef” -> “fedcba”

let abc = 'abcdef';
let reversed = '';

for (let i = abc.length - 1; i >= 0; i--) {
  reversed += abc[i];
}
console.log(reversed);

console.log('Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:');

// 0 - 11

for (let i = 0; i <= 11; i++) {
    if (i % 3 === 0) {
        console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra '+ i + 'vienetai.');
    } else if (i % 5 === 0) {
        console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra ' + i + 'vienetai.');
    } else if (i % 7 === 0) {
        console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra ' + i + 'vienetai.');
    }
}

// 8 - 31


// -18 - 18

// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.


console.log ('___________________Funkcijos____________________________________')

// Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus

// Funkcija pavadinimu “tusciaFunkcija”:
// nepriima jokių kintamųjų
// neatlieka jokios vidinės logikos
// gražina boolean tipo reikšmę “false”

function tusciaFunkcija() {
    return 'false' ;
  }
console.log(tusciaFunkcija());

// TESTAS:
// console.log( tusciaFunkcija() );
// rezultatas: false

console.log ('_________________________________________________________');

// Funkcija pavadinimu “daugyba”:
// priima du skaičiaus tipo kintamuosius
// atskirame kintamajame įsimena sandaugos reikšmę
// gražina saudaugos rezultatą

const z = 2
const x = 4
let result = daugyba(z, x)

function daugyba(z, x){
    return z * x;
}

// TESTAI:
// console.log( daugyba( skaicius1, skaicius2 ) );
// console.log( daugyba( skaicius3, skaicius2 ) );
// console.log( daugyba( skaicius1, skaicius3 ) );
// rezultatas: teisingos reikšmės;

console.log (daugyba (2, 4));
console.log (daugyba (5, 4));
console.log (daugyba (2, 5));

console.log ('_________________________________________________________');

// Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// priešingu atveju, funkcija tęsia darbą
// į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// gražina skaitmenų kiekį

function skaitmenuKiekisSkaiciuje(number) {
    if (typeof number !== "number") {
      console.log("Pateikta netinkamo tipo reikšmė.");
      return;
    }
    let count = 0;
    let numberString = number.toString();
    for (let i = 0; i < numberString.length; i++) {
        if (!isNaN(parseInt(numberString[i]))) {
            count++;
  }
}
return count;
}
// TESTAI:
// console.log( skaitmenuKiekisSkaiciuje( 5 ) );
// rezultatas: 1
// console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// rezultatas: 3
// console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// rezultatas: 11
// console.log( skaitmenuKiekisSkaiciuje( true ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( NaN ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”

// Funkcija pavadinimu “didziausiasSkaiciusSarase”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
// priešingu atveju, funkcija tęsia darbą
// pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
// gražina didžiausią surastą skaičių
// TESTAI:
// console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
// rezultatas: 1
// console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
// rezultatas: 3
// console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
// rezultatas: 78
// console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
// rezultatas: 69
// console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
// rezultatas: -1
// console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( didziausiasSkaiciusSarase( [] ) );
// rezultatas: “Pateiktas sąrašas negali būti tuščias.”

// Funkcija pavadinimu “isrinktiRaides”:
// priima du kintamuosius:
// pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
// antrasis nurodo kas kelintą raidę išrinkti
// patikrinti, ar pirmasis kintamasis yra teksto tipo:
// jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą
// patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
// jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
// priešingu atveju tęsiame darbą
// patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
// jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą
// patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
// priešingu atveju tęsiame darbą
// patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// priešingu atveju tęsiame darbą
// išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
// išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
// gražina rezultatą
// TESTAI:
// console.log( isrinktiRaides( “abcdefg”, 2 ) );
// rezultatas: “bdf”
// console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
// rezultatas: “cfil”
// console.log( isrinktiRaides( “abc”, 0 ) );
// rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
// console.log( isrinktiRaides( “abc”, 4 ) );
// rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// console.log( isrinktiRaides( 1561, 2 ) );
// rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”

// Funkcija pavadinimu “dalyba”:
// turi priimti du kintamuosius
// reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
// esant blogoms sąlygoms, išvesti atitinkamą pranešimą
// esant geroms - tęsti darbą
// į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
// daliname pirmąjį skaičių iš antrojo
// grąžinti suskaičiuotą reikšmę
// TESTAI:
// sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą

