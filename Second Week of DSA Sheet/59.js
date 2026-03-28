// Array left Rotation by 1
let num = [1, 2, 3, 4];
// result : [4, 1, 2, 3]
// using modulus method

let R=1
const temp = [1,2,3,4]

for(let i = 0; i < num.length; i++){
    temp[(i+R) % num.length] = num[i]
}
console.log(temp) 
