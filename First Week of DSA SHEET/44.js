// Project - Guess Game

function guessgame(name){
    let arr = ["Vishal", "Priyanshu", "Feature", "Ankit", "Shahil"]

    const randomMix = Math.floor(Math.random()* arr.length)
   if(arr[randomMix] === name){
          return `Success 🎉 Your lucky index is ${randomMix} and name is ${arr[randomMix]}`
   }else{
    return `${name} ❌ Next time better luck`
   }
    
}
console.log(guessgame("Priyanshu"))