//Print \hello\" until user gives wrong input using do while"

function wrongInput(input){
    do{
        console.log("hello");
    }while(input=="" && !isNaN(Number(input)))
        console.log("Invalid input");
}

wrongInput(40)