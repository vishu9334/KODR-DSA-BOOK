// Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.

function takeNumbers(n1, n2, n3, n4){
     const arr = []
     let sum = 0 
        arr.push(n1, n2, n3, n4);
        arr.forEach(ele => {
            sum +=ele
        });
        const avg = sum / arr.length
        return avg
}
console.log(takeNumbers(4,5,5,6))