//Check if array is sorted in increasing order or not. (Ex 1 - { 1, 5, 8, 9, 10, 15 } - OP = \YES\"

let arr = [1, 5, 80, 10, 15];
// const sortArr = arr.sort((a, b) => a - b);
// console.log(sortArr);
let result =[]
for(let i=0; i< 1; i++){
  for(let j=i; j<arr.length; j++){
        if(arr[j] >arr[j+1]){
          result.push(arr[j+1])
        }
        if(arr[j] < arr[j + 1]){
            result.push(arr[j])
        }
  }
}
console.log(result)

let arr = [1, 5, 80, 10, 15];

for(let i = 0; i < arr.length - 1; i++){
  for(let j = 0; j < arr.length - 1 - i; j++){
    if(arr[j] > arr[j + 1]){
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}