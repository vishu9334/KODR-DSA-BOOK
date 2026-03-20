// Accept a number and print its reverse

function reverse(num){
    let store = num.toString().split('').reverse().join('')
    let number = Number(store)
    return number
}
console.log(reverse(123))
