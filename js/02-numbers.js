console.clear();

/*
KINTAMUJU INICIIAVIMO BUDAI:
-const (defualt)
-let (jei reikes keisti/atnaujinti reiksme)
-var (stengtis niekada nenaudoti)

    NUMBERS:
        - Teigiami/neigiami
        - Sveikieji/desimtainiai
        - Normalus/nenormalus skaiciai
            - Begalybe
            - NaN ( Not a Number )

ARITMETINIAI OPERATORIAI: +, -, /, *, ** ( laipsnis ), % ( liekana )
PRISKIRIMO OPERATORIAI: =, +=, -=, /=, *=, **=, %=

*/

// skaicius / skaicius = skaicius
// 27 / 3 = 9

// labas / rytas = NaN

// Kiek: dvidesimt

// Siuntejas : 1000 - dvidesimt
// Gavejas: 1000 + dvidesimt

const metai = 2023;
const PI = 3.1415;

console.log (metai);
console.log (PI);
console.log (PI, metai);

const neigiamas = -6.7

console.log (neigiamas);

console.log (Infinity);
console.log (-Infinity);
console.log (NaN);

const a = 7;
const b = 5;

const suma = a + b;
console.log (suma);

const skirtumas = a - b;
console.log (skirtumas);

const dalmuo = a / b;
console.log (dalmuo);

const sandauga = a * b;
console.log (sandauga);

const dvejetai = 2 + 2 * 2;
console.log (dvejetai)

const dvejetaiSkliaustuose = (2 + 2) * 2;
console.log (dvejetaiSkliaustuose);

const kampas = 90 * 90;
const kampas2 = 90 ** 2;
const kampas3 = 90 ** 3;
const kampas3_2 = 90 * 90 * 90;
console.log (kampas);
console.log (kampas2);
console.log (kampas3);
console.log (kampas3_2);

const liekana1 = a % b;
console.log (liekana1)

const liekana2 = 21 % 3;
console.log (liekana2);

const liekana3 = 31 % 3;
console.log (liekana3);

const liekana4 = -41 % 4;
console.log (liekana4);

const liekana5 = -51 % -5;
console.log (liekana5);

const liekana6 = 3.1415 % 3;
console.log (liekana6);

console.log (0.1 + 0.2);

console.log ((1 + 2) / 10 );

const f = 0.1;
const g = 0.2;
const h = (f*10 + g * 10) / 10;
console.log (h)

console.log ('____________________');


// console.clear();

let pinigine = 0;
console.log (pinigine)

pinigine = pinigine + 1;
console.log (pinigine)

pinigine = pinigine + 2;
console.log (pinigine)

pinigine = pinigine - 3;
console.log (pinigine)

pinigine = pinigine + 4;
console.log (pinigine)

console.log ('____________________');

let temperatura = 0;
console.log (temperatura);

temperatura = temperatura + 2;
console.log (temperatura);

temperatura += 3;
console.log (temperatura);

temperatura -= 1;
console.log (temperatura);

temperatura *= 2;
console.log (temperatura);

temperatura /= 2;
console.log (temperatura);

temperatura **= 2;
console.log (temperatura);

temperatura %= 3;
console.log (temperatura);