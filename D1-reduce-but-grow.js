//source link = https://www.codewars.com/kata/57f780909f7e8e3183000078/javascript

// Solusi Pertama

// function grow(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

// Solusi Kedua
function grow(x) {
  const result = x.reduce((acc, curr) => acc * curr, 1);
  return result;
}
console.log(grow([1, 2, 3, 4]));
console.log(grow([2, 2, 2, 2, 2, 2]));
