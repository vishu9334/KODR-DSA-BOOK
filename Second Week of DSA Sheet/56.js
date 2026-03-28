// Find the second greatest element (Ex: {2, 96, 69, 77, 145, 20} = Second greatest element = 96)

let arr = [2, 96, 69, 77, 145, 20]

let max = arr[0];

for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
            max = arr[i]
    }
}
let secondMax =-Infinity
for(let i=0; i< arr.length; i++){
    if(arr[i] !== max && arr[i] > secondMax){
            secondMax = arr[i]
    }
}
console.log(secondMax)

