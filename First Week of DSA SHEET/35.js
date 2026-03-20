// Sum of digits of a number (Ex: 936 = 18)

const SumDigit = (number) => {
    let sum=0
    let num = number.toString().split('')
    
        num.forEach(element => {
            sum += Number(element)
        });
        return sum
}
console.log(SumDigit(333))
