//===== SPREAD OPERATOR =====//

let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];

let junto: number[] = [...arr1, ...arr2];

console.log(`Array 1: ${arr1}`);
console.log(`Array 2: ${arr2}`);
console.log(`Array juntos: ${junto}`);