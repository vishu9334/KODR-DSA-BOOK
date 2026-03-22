// Right Triangle - Alphabet Pattern
const letters= [
    "A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z"
  ];
  


for(let i=0; i<=letters.length; i++){
    let row =""
    for(let j=0; j<i; j++){
        row +=letters[j]
    }
    console.log(row)
}