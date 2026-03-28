// Array left rotation by K elements
// let k of element is 3
// result : [2, 3, 4, 1]
let arrayOfNum = [1,2,3,4]

const temp =[]
const K = 3
for(let i = 0; i < arrayOfNum.length; i++){
    temp[(i+K) % arrayOfNum.length] = arrayOfNum[i]
}
console.log(temp)