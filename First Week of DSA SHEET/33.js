// Write a program to take two inputs a, b & find the value of a raised to 
// the power of b. (Ex - a = 2, b = 5, OP - 2^5 = 32)

function squart(base, power) {
    let totalOfSquare = []
    //  case1       
    for (let i = power; i > 0; i--) {
        let res = base * i
        totalOfSquare.push(res)
    }

    // let sumOfPower = totalOfSquare.reduce((acc, curr)=> acc + curr, 0)
    // return sumOfPower

    // case2
    let sum = 0
    for (let i = 0; i < totalOfSquare.length; i++) {
        sum += totalOfSquare[i]
    }
   return sum


}
console.log(squart(2, 5))