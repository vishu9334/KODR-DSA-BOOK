//Sum up to n terms.

function sumN(n){
    let sum=0
        for(let i=1; i<=n; i++){
           sum= sum + i
        }
        return sum
}
console.log(sumN(5))