console.clear ();

/*
FOR (CIKLAS)

for (pradzia; klausimas; pakeitimas) {
    kartojama logika
}
*/

const marks = [ 10, 2, 8, 4, 6];

let sum = 0
let index = 0;
sum += marks[index++];
sum += marks[index++];
sum += marks[index++];
sum += marks[index++];
sum += marks[index++];

console.log ('Vidurkis: ', sum / marks.length);


// ispauzdinti nuo 0 iki 5.

for (let i = 0; i <= 5; i++) {
    console.log(i);

}

// isspauzdinti nuo 100 iki 104

for (let i = 100; i <= 104; i++) {
    console.log(i);
}

// isspauzdinti nuo 1000 iki 995

for (let i = 1000; i >= 995; i--) {
    console.log(i);
}
console.log ('________________________________')


const pazymiai = [2, 4, 6, 8, 10, 8, 6, 4, 2];

let suma = 0;

for (let i = 0; i < pazymiai.length; i++) {
    console.log (i, '--->', pazymiai[i]);
    
}

console.log ('________________________________')

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for ( let i = 2; i < numbers.length; i+=3) {
    console.log (i, '-->', numbers[i]);
}

const abc = 'abcdefghijklmnopqrstuvwxyz';
let text = '';

for (let i = 0; i < abc.length; i++){
    console.log (abc[i]);
}

console.log ('________________________________')

const students =  ['Lukas', 'Matas', 'Nojus', 'Dominykas','Dovydas'];

for (let i=0; i < students.length; i++) {
    const name = students[i];
    const hi = `sveiki, mano vardas yra ${name}!`;
    console.log(hi);
}
