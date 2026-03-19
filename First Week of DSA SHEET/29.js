// Print the sum of all even & odd numbers in a range separately.

function sumEvenOdd(start, end){
    let evenSum =0
    let oddSum =0
    for(let i=start; i<= end; i++){
        if(i % 2 === 0){
            evenSum += i;   // even
        } else {
            oddSum += i;    // odd
        }
    }
    return {
        evenSum,
        oddSum
    };
}
console.log(sumEvenOdd(1, 10));