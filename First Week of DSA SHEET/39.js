// Automorphic number (Ex: 5 = 25 = 625 = 390625, 6=36, 76 = 5776)

function automorphic(number) {
    let square = number * number;

    let length = number.toString().length;

    let lastDigits = square % (10 ** length);


    if (lastDigits === number) {
        return "Automorphic Number";
    } else {
        return "Not Automorphic";
    }
}

console.log(automorphic(5));   
console.log(automorphic(6));   
console.log(automorphic(76)); 
console.log(automorphic(7));   