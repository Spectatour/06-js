// console.clear();

// class Pet {
//     constructor(color, name) {
//         this.name = name;
//         this.color = color;
//         this.gender = true;
//         this.type = '';
//         this.sound = 'Miau au';
//     }

//     updateGender() {
//         this.gender = !this.gender;
//     }

//     voice() {
//         return `${this.name} says: ${this.sound}!`;
//     }
// }

// class Dog extends Pet {
//     constructor(name, color) {
//         super(color, name);
//         this.type = 'dog';
//         this.sound = 'Au au';
//     }

//     voice() {
//         return `${this.name}, who is a ${this.type}, says: ${this.sound}!`;
//     }
// }

// class Cat extends Pet {
//     constructor(name, color) {
//         super(color, name);
//         this.type = 'cat';
//         this.sound = 'Miau miau';
//     }

//     sudauzyti(daiktas) {
//         return `${this.name} katik sudauze ${daiktas}`;
//     }
// }


// const rex = new Dog('Rex', 'black');
// const rainis = new Cat('Rainis', 'mixed');
// const siaubas = new Pet('keista', 'Siaubas');

// console.log(rex.voice());
// console.log(rainis.voice());
// console.log(siaubas.voice());

console.clear ();
console.log (`--------------------------------------`)
/*
Animal:
    Pet:
        - Cat
        - Dog
    Bird:
        - Parrot
        - Sparrow
    Fish:
        - Shark
        - Shirmp
*/
class Animal {
    constructor(name, color, options = {}) {
        this.name = name;
        this.color = color;
        this.type = options.tipas || 'yes';
        this.sound = 'default';
        this.legs = options.kojos || 'default';
        this.bipedal = true;
        this.age = options.amZius || 'default';

        console.log(options);
    }
    voice() {
        return `${this.name} says: ${this.sound}!`;
    }
    updateBipedal() {
        this.bipedal =!this.bipedal;    
    }
}
class Pet extends Animal {
    constructor(name, color,options = {}) {
        super(name, color,options);
    }
}
class Bird extends Animal {
    constructor(name, color,options = {}) {
    super(name, color, options);
    this.sound = 'chirp chirp';
}
}
class Cat extends Pet {
    constructor(name, color,options = {}) {
    super(name, color,options);
    this.sound = 'miau miau';
}
}
class Dog extends Pet {
    constructor(name, color,options = {}) {
    super(name, color,options);
    this.sound = 'au au';
}
}
class Parrot extends Bird {
    constructor(name, color,options = {}) {
    super(name, color,options);
    this.sound = 'ka tu?';
}
}
class Sparrow extends Bird {
    constructor(name, color,options = {}) {
    super(name, color,options);
    }
}
class Fish extends Animal {
    constructor(name, color,options = {}) {
        super(name, color,options);
        this.sound = 'blub blub';
        this.legs = 0;
    }
}
class Shark extends Fish {
    constructor(name, color,options = {}) {
        super(name, color,options);
        
    }
}
class Shrimp extends Fish {
    constructor(name, color,options = {}) {
        super(name, color,options);

    }
}
Dog.all = [];
console.log(Dog.all);

const dog = new Dog('Hounderis','White',{amZius: 5, kojos: 4, tipas: 'naminis'});
console.log(dog);
console.log (dog.voice());
const dog1 = new Dog('Mikis','White',{amZius: 5, kojos: 4, tipas: 'naminis'});
console.log(dog1);
const cat = new Cat('Meowsas','Multi', {amZius: 13, tipas: 'laukinis'});
console.log(cat);
const parrot = new Parrot('Papuga', 'black',{tipas: 'papuga'});
console.log (parrot);
console.log (parrot.voice());
const sparrow = new Sparrow('Zvirblis', 'blue',{tipas: 'skraidantis', kojos: 2});
console.log (sparrow);
const shark = new Fish ('Sharpedo','black and white')
console.log (shark);
const shrimp = new Fish ('Shrimp','pink')
console.log (shrimp);
shark.updateBipedal();
console.log (shark);
// console.clear();
// const animals = [ dog, cat, parrot, sparrow, shark, shrimp];
// console.log (animals)




console.log (`--------------------------------------`)
/*
Transporto priemone:
    Automobilis:
        - Lengvoji
        - Sunkvezimis
    Motociklas:
        - Motociklas su lopseliu
        - Ziedinis Motociklas
    Lektuvas:
        - malunsparnis
        - keleivimis
*/

/*
Zmogus:
    - vyras
    - moteris
*/

/*
Zmogus:
    Medikas:
        - slaugytojas
        - medikas
        - vyr medikas
    Gaisrininkas:
        - ...
        - ...
    Karininkas:
        - eilinis
        - leitenantas
*/

/*
Vartotojas:
    Neregistruotas
    Registruotas
        - paprastas
        - Admin:
            - paprastas
            - super
*/







// class Animal {
//     constructor(name, color, options = {}) {
//         this.name = name;
//         this.color = color;
//         this.type = 'yes';
//         this.sound = 'default';
//         this.legs = options.kojos || 'default';
//         this.bipedal = true;
//         this.age = options.amZius || 'default';
//         console.log(options);
//     }
// }
// class Pet extends Animal {
//     constructor(name, color,options = {}) {
//         super(name, color,options);
//     }
// }

// class Dog extends Pet {
//     constructor(name, color,options = {}) {
//     super(name, color);
//     this.sound = 'au au';
// }
// }

// const dog = new Pet('Hounderis','White',{amZius: 5, kojos: 4});
// console.log(dog);