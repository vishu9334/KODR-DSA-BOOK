//Accept a number and check if it is a palindromic 
// number (If number and its reverse are equal, Ex: 12321 - Reverse - 12321)

const palindrom = (number)=>{
    let num = number.toString().split('').reverse().join('')
    let reverse = Number(num)
 
    if(number === reverse){
       return `This ${number} is palindrom`
    }
    else{
       return `This ${number} is not palindrom`
    }
}
console.log(palindrom(12321))