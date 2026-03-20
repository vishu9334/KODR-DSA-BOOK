// Separate each digit of a number and print it on a new line (Ex - 123 -> OP: 3, 2, 1)

function separate(num){
   const split = num.split('')

   let arr = split.map((e)=>{
    return Number(e)
   })
   console.log(arr)
}
separate('333')