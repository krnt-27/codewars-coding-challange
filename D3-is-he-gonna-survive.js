// source link problem = https://www.codewars.com/kata/59ca8246d751df55cc00014c/javascript

// solusi pertama
// function hero(bullets, dragons){
//   bullets
//     if (bullets >= dragons*2 ){
//       return true
//     } else{
//       return false
//     }
//   }

// solusi kedua
const hero = (bullets, dragons) => bullets >= dragons * 2;

console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(4, 5));
console.log(hero(100, 40));
console.log(hero(1500, 751));
console.log(hero(0, 1));
