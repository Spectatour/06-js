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