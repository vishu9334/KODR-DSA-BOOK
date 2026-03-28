// Binary Search. If element found print the index, else -1

let numbers =[23, 55, 1, 66, 7, 9];
// [1, 7, 9, 23, 55, 66]
function binarySearch(numbers ,start, last, target ){

    if(start > last){
        return -1
    }
    numbers.sort((a,b)=>a-b)

    let midNumber = Math.floor(start + (last - start) / 2)
   
   if(numbers[midNumber] === target){
    return midNumber
   }
else if(numbers[midNumber] > target){
        binarySearch(numbers, start, midNumber-1, target)
}else if(numbers[midNumber < target]){
        binarySearch(numbers, midNumber+1, last, target)
}
    
    }


console.log(binarySearch(numbers, 0, numbers.length-1, 9))