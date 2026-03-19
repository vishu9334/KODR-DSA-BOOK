// Print all the factors of a number.

function printFactors(num){
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            console.log(i);
        }
    }
}

printFactors(12);