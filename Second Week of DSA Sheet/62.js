// Linear Search an array - If element found print the index, else -1

let array = [1,5,6,7]

function findIndex(value){
    for(let i=0; i<array.length; i++){
            if(array[i] === value){
                return array.indexOf(value)
            }
    }
    return -1
    
}
console.log(findIndex(60))