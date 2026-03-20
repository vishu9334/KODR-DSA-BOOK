//Print the sum of all factors of a number (Ex: 50 -> 1 + 2 + 5 + 10 + 25 = 43)

function factorSum(num){
    let sumFactorArr=[]

        for(let i=num; i>0; i--){
             if(num % i === 0){
                sumFactorArr.push(i)
             }
        }
        console.log(sumFactorArr)
        // const sum = sumFactorArr.reduce((acc, curr)=> acc + curr, -num)
        const sum = sumFactorArr.reduce((acc, curr)=> acc + curr, 0)
        return sum
}
console.log(factorSum(50))