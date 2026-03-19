//Take a number as input and print its table (Ex: 5 * 1 = 5 ... up to 10 terms)

function tablePrint(table){
    console.log(`Table of ${table}`)
    for(let i=1; i<=10; i++){
        console.log(`${table * i}`)
    }
}
tablePrint(5)