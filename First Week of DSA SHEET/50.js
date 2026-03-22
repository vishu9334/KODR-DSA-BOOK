// Mirrored Right Triangle Pattern

for(let i=1; i<=5; i++){
    let str1 = ""
    

    for(let s=1; s<=5-i; s++){
        str1 +=" "
    }

    for(let j=1; j<=i; j++){
        str1 +="*"
    }
    console.log(str1)
}
for(let i = 4; i >= 1; i--){
    let str1 = "";

    for(let s = 1; s <= 5 - i; s++){
        str1 += " ";
    }

    for(let j = 1; j <= i; j++){
        str1 += "*";
    }

    console.log(str1);
}