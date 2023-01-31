console.clear ();
console.log (`---------------Sum of positive----------------------`)
// console.clear ();

// function test(a) {
//     console.log (a);
//     let sum = 0;
//     for (let i = 0; i < a.length; i++) {
//         console.log(a[i]);
//         sum += a[i];
        
//     }
//     return sum;
//   }

//   console.log ('',test(1,-3,15,23,-2,0))

// console.clear ();


// function positiveSum(arr) {
//     let sum = 0;
//     for(let i=0; i<arr.length; i++) {
//       if(arr[i] > 0) {
//         sum += arr[i];
//       }
//     }
//     return sum;
//   }

// console.log(positiveSum([1, -4, 7, 12]))
  
console.log (`---------------Reversed Strings----------------------`)

// function solution(str){
//     let reversed = '';
//       for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//       }
//     return reversed;
//   }
  
//   console.log (solution('world'));
//   console.log (solution('word'));

console.log (`---------------Polish alphabet----------------------`)


// function correctPolishLetters(string) {
//     const polish = ["ą", "ć", "ę", "ł", "ń", "ó", "ś", "ź", "ż"]
//     const latin = ["a", "c", "e", "l", "n", "o", "s", "z", "z"]
//     let res = ""; // resultatas
//     for (let i = 0; i < string.length; i++) { //eisim per kiekviena raide, tol kiek bus raidziu sarase.
//         if (polish.includes(string[i])) { // jeigu raide pakliuna is polish saraso
//             res += latin[polish.indexOf(string[i])]; // tada rezultatas += toi pacioj vietoj atitinkamai latin raidei
//         }   else {
//             res += string[i]; // jeigu polish raide nepakliuna tada rezultatas nieko nekeicia
//         }
        
//     } return res;
//   }


//   console.log(correctPolishLetters(`Jędrzej Błądziński`));

console.log (`---------------Get Planet Name By ID----------------------`)

// function getPlanetName(id){         // reikalingas break po kiekvieno case. 
//     let name;                       //  kad ciklas sustoju prie tam tikros dienos
//     switch(id){
//       case 1:
//         name = 'Mercury'
//         break;
//       case 2:
//         name = 'Venus'
//         break;
//       case 3:
//         name = 'Earth'
//         break;
//       case 4:
//         name = 'Mars'
//         break;
//       case 5:
//         name = 'Jupiter'
//         break;
//       case 6:
//         name = 'Saturn'
//         break;
//       case 7:
//         name = 'Uranus'
//         break;
//       case 8:
//         name = 'Neptune'
//         break;
//     }
    
//     return name;
//   }

//   console.log (getPlanetName(5))

console.log (`---------------You only need one - Beginner----------------------`)

// function check(a, x) {
//   return a.includes(x);
// }
// console.log(check([66, 101], 66), true);
// console.log(check([101, 45, 75, 105, 99, 107], 107), true);
// console.log(check(['t', 'e', 's', 't'], 'e'), true);
// console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);

console.log (`---------------All Star Code Challenge #18----------------------`)

// function strCount(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === letter) {
//         count++;
//       }
//     }
//     return count;
//   }

//   console.log(strCount("Hello", "o"));
//   console.log(strCount("Hello", "l"));
//   console.log(strCount("", "z"));

console.log (`---------------Is it even?----------------------`)

// const n =10

// function testEven(n) {
//     return n % 2 === 0;
// }

// function testEven(n){
//     return !(n % 2);
//   }


// console.log (testEven(10));

// console.log (testEven(1.5));

// console.log (testEven(4/2));

  console.log (`---------------Is he gonna survive?----------------------`)

//   function hero(bullets, dragons){
//     if (bullets >= dragons *2) {
//         return true;
//     } else {
//         return false;
//     }
//   }

//   console.log(hero(7,3));
//   console.log(hero(4,3));

console.log (`---------------SpeedCode #2 - Array Madness----------------------`)

// function arrayMadness(a, b) {
//     let sumA = 0;
//     let sumB = 0;
//     for (let i = 0; i < a.length; i++) {
//       sumA += a[i] ** 2;
//     }
//     for (let i = 0; i < b.length; i++) {
//       sumB += b[i] ** 3;
//     }
//     return sumA > sumB;
//   }
//   console.log(arrayMadness([4, 5 ,6 ],[1, 2, 3]));


  console.log (`---------------Will you make it?----------------------`)

//   const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if (distanceToPump <= mpg * fuelLeft) {
//         return true;
//     } else {
//     return false;
//     }
//   };

//   console.log (zeroFuel(25,25,1));

  console.log (`---------------xxx----------------------`)



  console.log (`---------------xxx----------------------`)



  console.log (`---------------xxx----------------------`)



  console.log (`---------------xxx----------------------`)



  console.log (`---------------xxx----------------------`)




function reverseWords(str) {
    let reverseWord = str.split(" ").reverse().join(" ");
    console.log(reverseWord);
    return reverseWord;
  }
  console.log(reverseWords(`the worlds greatest`));
  console.log(reverseWords(`I am spongebob`))