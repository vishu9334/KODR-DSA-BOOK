// Array Reverse Without Using Extra space

let arr =[1,2,3,4]
let left =0;
let right=arr.length-1
function reverse(arr){
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr
}
console.log(reverse(arr))