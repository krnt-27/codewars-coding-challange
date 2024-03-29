// source link problem = https://www.codewars.com/kata/5a00e05cc374cb34d100000d/javascript

// solusi 1
// const reverseSeq = (n) => {
//   let result = [];
//   for (let i = n; i >= 1; i--) {
//     console.log(i);
//     result.push(i);
//   }
//   return result
// };

// solusi 2
const reverseSeq = (n) => {
  return Array(n)
    .fill()
    .map((el, i) => i + 1)
    .reverse();
};

console.log(reverseSeq(8));
