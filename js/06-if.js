console.clear();

/* 
IF (loginis palyginimas)

Palyginimo operatoriai:
- visi:         >, <, ==, !=, >=, <=, ===, !==
- naudotini:    >, <, >=, <=, ===, !==
- nenaudotini:  ==, !=

LOGIANIAI operatoriai:
- && (and)
-|| (or)

Sablonai:
if () {}
if () {} else {}
if () {} else if{}
if () {} else if{} else {}
if () {} else if{} ... else if () {}
if () {} else if{} ... else if () {} else {}

*/

if (4>2) {
    console.log('4 yra daugiau uz 2');
} else {
    console.log('nera daugiau');
}


if (7 == 8) {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if (7 != 7) {
    console.log('nelygu');
} else {
    console.log('lygu');
}

if (88 >= 9) {
    console.log ('daugiau arba lygu');
} else {
    console.log ( 'maziau')
}

if (88 <= 99) {
    console.log ('maziau arba lygu');
} else {
    console.log ( 'daugiau')
}

console.log ('______________________')

if (0 == '') {
    console.log('lygu')
} else {
    console.log ('nelygu')
}

if (7 ==='7') {
    console.log ( 'grieztai lygu')
} else {
    console.log ('nelygu')
}

console.log ('______________________________');

const diena = 7;

if (diena === 1) {
    console.log ('pirmadienis')
} else if (diena === 2){
    console.log ('antradienis')
} else if (diena === 3){
    console.log ('treciadienis')
} else if (diena === 4){
    console.log ('ketvirtadienis')
} else if (diena === 5){
    console.log ('penktadienis')
} else if (diena === 6){
    console.log ('sestadienis')
} else if (diena === 7){
    console.log ('sekmadienis')
} else {
    console.log ('nezinau tokios dienos')
}

// CODE NESTING - nestinimas

const day = 7;

if (day === 1) {
    console.log('pirmadienis');
} else {
    if (day === 2){
        console.log('antradienis');
    } else {
        if (day === 3){
            console.log('treciadienis');
        } else {
            if (day === 4){
                console.log('ketvirtadienis');
            } else {
                if (day === 5){
                    console.log('penktadienis');
                } else {
                    if (day === 6){
                        console.log('sestadienis');
                    } else {
                        if (day === 7){
                            console.log('sekmadienis');
                        } else {
                            console.log ('nezinau tokios dienos');
                        }
                    };
                }
            }
        }
    }
}

console.log ('____________________________________');

const nuoKadaSilta = 15;
const temperatura = 30;
const arLyja = true;

if ( temperatura < nuoKadaSilta ) {
    if (arLyja) {
        console.log ('nera silta: reikia striukes ir skecio');
    } else {
        console.log ('nera silta: reikia striukes');
    }
} else {
    if (arLyja) {
        console.log ('silta ir lyja: varom su maike')
    } else {
        console.log ('Silta ir nelyja: varom su maike');
    }
}

if (temperatura >= nuoKadaSilta && !arLyja) {
    console.log ('Silta ir nelyja: varom su maike');
} else if (temperatura >= nuoKadaSilta && arLyja) {
    console.log ('silta ir lyja: varom su maike')
} else if (temperatura >= nuoKadaSilta && arLyja) {
    console.log ('nera silta: reikia striukes ir skecio');
} else {
    console.log ('nera silta: reikia striukes');
}