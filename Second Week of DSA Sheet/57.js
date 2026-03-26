//Check if array is sorted in increasing order or not. (Ex 1 - { 1, 5, 8, 9, 10, 15 } - OP = \YES\"

let arr = [1, 5, 80, 10, 15];
const sortArr = arr.sort((a, b) => a - b);
// console.log(sortArr);

let accendingOrder = [];
let i = 0;
for (let j = i; j < arr.length; j++) {
  if (arr[j] === arr[i]) {
    accendingOrder.push(arr[j]);
  } else if (arr[j] > arr[i]) {
    accendingOrder.push(arr[j]);
  }
}
console.log(accendingOrder);
