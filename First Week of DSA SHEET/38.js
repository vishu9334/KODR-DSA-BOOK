// Accept a number and check if it is a strong
//  number or not (Sum of factorial of each digit, Ex: 145 = 1! + 4! + 5! = 145)

function fac(n){
    let num = n.toString().split('').map(Number)
    let sum = 0
    for(let i=0; i< num.length; i++){
        let multiplie=1
       for(let j=num[i]; j > 0; j--){
           multiplie = multiplie *j
        }
        sum +=multiplie
   }
   return sum
}
console.log(fac(145))