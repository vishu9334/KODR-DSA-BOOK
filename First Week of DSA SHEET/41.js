// Make a choice based calculator using do while

const calculator = (cal, input1 , input2 )=>{
       
    do {
       switch (cal) {
        case "add" :
                const res = input1 + input2
                console.log(res)
            break;
       
        case "sub" :
                const res1 = input1 - input2
                console.log(res1)
            break;
       
        case "divide" :
                const res2 = input1 / input2
                console.log(res2)
            break;
       
        case "multiplie" :
                const res3 = input1 * input2
                console.log(res3)
            break;
       
        case "modlus" :
                const res4 = input1 % input2
                console.log(res4)
            break;
       
        default:
            break;
       }
    } while (false)
}
calculator("multiplie", 4, 5)