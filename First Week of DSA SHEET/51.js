// Tringle pattren

for(let i=1; i<=5; i++){
    let str= ""
    for(let s=1; s<=5-i; s++){
        str +=" "
    }
    for(let j = 1; j <= (2*i - 1); j++){
        str += "*";
    }
    console.log(str)
}