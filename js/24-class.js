console.clear ();

/*

OOP <---> class ( neturi parametru kolkas)(Pavadinimai is didziosios raides)

new Class() ---> sukuria tos Class'es objekta
*/

class Person {                              // constructor yra metodas
    constructor(vardas, amzius,options = {}){
        this.name = vardas;
        this.age = amzius;
        this.period = options.laikasPilve || 9;                    // kiek laiko buvo pilve
        this.teethCount = options.dantu || 0;                           // ?? ir || filtruoja reiksmes
        console.log(options);
    }
    sayHi (){
        return `labas! as ${this.name}!`;
    }
    printTeethSentence (){
        return `Labas, as vardu ${this.name} ir turiu ${this.teethCount} dantu!`
    }
    updateTeeth(count){
        this.teethCount = count;

    }
}
const ona = new Person ('Ona', 55,{laikasPilve: 7, dantu: 2});
const jonas = new Person ('Jonas', 77,{});
const petras = new Person ('Petras', 99,{laikasPilve: 8});       //butinai `new`
const maryte = new Person ('Maryte', 88,{dantu: 1});      // kurimo metu duoti parametrus, jie keliauja pas constrctoriu
                                            // clases objecte

console.log (petras);
console.log (maryte);
console.log (jonas);
console.log (ona);

console.log (petras.sayHi())
console.log (maryte.sayHi())

petras.updateTeeth(2);
console.log (petras.teethCount);
console.log(petras.printTeethSentence())




























// const petras = {
//     name: 'Petras',
//     age: 99,
//     isMarried: true,
//     favoriteFunction: (a, b) => a + b,
// }

// const maryte = {
//     name: 'Petras',
//     age: 88,
//     isMarried: false,
//     favoriteFunction: a => a ** b,
// }