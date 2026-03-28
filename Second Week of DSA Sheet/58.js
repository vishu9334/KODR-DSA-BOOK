// // Take n integer inputs from user and store them in an array. Now, copy all the elements into another array in reverse order and print it.

// Aproch 1-------------------

// const int =(num)=>{
//     console.log(num)
//     let storeArr = num.toString().split('').map((n)=>(parseInt(n)))
//     let store2Arr =[];

//     for(let i=storeArr.length; i>0; i--){
//         store2Arr.push(storeArr[i-1])
//     }
//  return(Number(store2Arr.join('')))
    
// }
// console.log(int(1234))

// approch 2------------
const int =(num)=>{
    console.log(num)
    return Number(num.toString().split('').reverse().join(''))
}
console.log(int(1234))



























// Deep copy and Shallow copy self practice
// let car ={
//     brand:"maruti",
//     name:'Alto'
// }
// const shallowCar = car

// shallowCar.name="Clerio"

// // console.log(car, shallowCar)

// // nested shallow copy

// const cat ={
//     name:"kitty",
//     categorie:{
//         type:"wild animale"
//     }
// }
// const shellowCat = cat

// shellowCat.categorie.type="nonveg"
// shellowCat.categorie.voice="mew"
// // console.log(cat,shellowCat)

// const god = {
//     name:"vishnu dev",
//     avatar:{
//         name:"Krishna",
//         age:"duapar uag"
//     }
// }
// const godCopy = {...god}
// if(typeof(godCopy) === typeof(god)){
//     godCopy.name="Braha"

//     godCopy.avatar.type="wild Animal"
//     godCopy.name="Shyam"
//     console.log(god, godCopy);
// }else{
//     console.log("first")
// }

// let cars = {
//     brand : "Tata",
//     model:{
//         type:"suv",
//     },
//     drive: ()=> console.log("i'm driving")
// }
// let vehicle = JSON.parse(JSON.stringify(cars))
// // console.log(cars)        //  { brand: 'Tata',model: { type: 'suv' },drive: [Function: drive] }
// // console.log(vehicle)


