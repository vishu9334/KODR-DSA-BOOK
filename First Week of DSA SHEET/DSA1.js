function bigFindNumber(a, b) {
  return a === b
    ? "Both are equal"
    : a > b
      ? `A is greater then B : ${a} > ${b}`
      : `B is greater then A : ${b} > ${a}`;
}

// console.log(bigFindNumber(6,6))

function twoSumIntiger(a, b) {
  return a < 0 || b < 0
    ? `Warnning! your digit is Negative: ${a} or ${b}`
    : `Sum of ${a} and ${b} is ${a + b}`;
}
// console.log(twoSumIntiger(4, 9))

function twoSum() {
  let a = Number(prompt("Enter number of a"));
  let b = Number(prompt("Enter number of b"));

  return a < 0 || b < 0
    ? `Warnning! your digit is Negative: ${a} or ${b}`
    : `Sum of ${a} and ${b} is ${a + b}`;
}
// console.log(twoSum())

function userData() {
  let name = prompt("Enter Name");
  let age = Number(prompt("Enter Age"));

  return `User name is ${name} and age is ${age}`;
}
// console.log(userData())

function incrementDecrement(a, b) {
  a++;
  b++;
  console.log(a, b);
}
// console.log(incrementDecrement(1,3))

function swip(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b);
}

// swip(3,4)

function rectangle(l, b) {
  const area = l * b;
  // let perimeter1 = (l+l) +( b+b)
  let perimeter = 2 * (l + b);
  return { area, perimeter };
}

// console.log(rectangle(2,3))

function simpleInterest(P, R, T) {
  const SI = Math.imul(P, R, T) / 100;
  return SI;
}
// console.log(simpleInterest(1000, 10, 2))
// P : Starting paisa 💰
// R/100 : Rate ko percent se decimal me convert karna (R = 10% → 10/100 = 0.1)
// 1+R/100 : Growth factor 🌱. 	•	1   → original paisa (100%)
// 	•	1   → original paisa (100%)
// 	•	0.1 → interest (10%)
// 👉 Total = 110% = 1.1

function simpleInterest(P, R, T) {
  const A = P * Math.pow(1 + R / 100, T);
  return A - P;
}
// console.log(simpleInterest(1000, 10, 2))

function tringleArea(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}
// console.log(tringleArea(2,3,4));

function surfaceAreaSphere(r) {
  const SA = 4 * Math.PI * r * r; //4PIr^2
  return SA;
}
// console.log(surfaceAreaSphere(7))

// Find circumference and area of circle
function CCA(R) {
  let pi = Math.PI;
  const circumfrence = 2 * pi * R;
  const area = pi * R * R;
  return `circle of circumfrence is ${circumfrence} and area is ${area}`;
}
// console.log(CCA(4))
//Accept two numbers and print the greatest between them

function greatestNum(a, b) {
  return a < b
    ? `B ${b} is gretest number to A ${a}`
    : `A ${a} is greatest number to B ${b}`;
}
// console.log(greatestNum(5 , 4))

//Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir (on the basis of gender))

function sayGoodMorning(gender) {
  return gender === "male"
    ? `${gender}: Good morning sir`
    : `${gender}: Good morning mam`;
}
// console.log(sayGoodMorning("female"))

// Extend the previous program and handle the wrong inputs. Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong Input.

function gender(gender){
      if(gender === 'M' || gender === 'm'){
        return `Good Morning Sir`
      }else if (gender === 'F' || gender === 'f'){
          return `Good Morning Ma'am`
      }else{
        return `Wrong input`
      }
}
console.log(gender('f'))


//Accept an integer and check whether it is an even number or odd.

function checkNumber(num) {
  if (!num) throw new Error("Number not found!");
  return num < 0
    ? `${num} is negative number`
    : num % 2 === 0
      ? `${num} is even number`
      : `${num} is odd`;
}
// console.log(checkNumber(-3))

// Accept name and age from the user. Check if the user is a valid voter or not. (Valid - Hello Shery, You are a valid voter. Invalid - Sorry Shery, you can't cast the vote. Part 2 - Print after how many years the user will be eligible)

function eligibleForVote(name, age) {
  if (age >= 18) {
    return `Hello ${name}, your age ${age} so you are a valid voter`;
  } else if (age < 18) {
    return `Hello ${name}, your age ${age} is under 18 so you are not a valid voter. 
              Note: At least voter age is 18+ then you can vote.`;
  }
}
// console.log(eligibleForVote("vihal", 10))

//Accept a day number between 1-7 and print the corresponding day name.
function weekName(day) {
  return day === 1
    ? `${day} : Monday`
    : day === 2
      ? `${day} : Tuesday`
      : day === 3
        ? `${day} : Wednesday`
        : day === 4
          ? `${day} : Thursday`
          : day === 5
            ? `${day} : Friday`
            : day === 6
              ? `${day} : Saturday`
              : day === 7
                ? `${day} : Sunday`
                : "Not day";
}
// console.log(weekName(3))

function getDay(day) {
  switch (day) {
    case 1:
      return `${day} : Monday`;
    case 2:
      return `${day} : Tuesday`;
    case 3:
      return `${day} : Wednesday`;
    case 4:
      return `${day} : Thursday`;
    case 5:
      return `${day} : Friday`;
    case 6:
      return `${day} : Saturday`;
    case 7:
      return `${day} : Sunday`;
    default:
      return "Holy day";
  }
}
// console.log(getDay(4))
function getDay(day) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return days[day - 1] ? `${day} : ${days[day - 1]}` : "Invalid day";
}

// console.log(getDay(4));

//Accept three numbers and print the greatest among them
function greatestNum(num1, num2, num3) {
  const arr = [num1, num2, num3];
  let greatest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > greatest) {
      greatest = arr[i];
    }
  }
  console.log(greatest);
}
// greatestNum(1, 2, 4);
//Accept a year and check if it a leap year or not (google to find out what's a leap year)

function findLeapYear(Y){
      let currentDate = new Date()
      let year = currentDate.getFullYear()
    //  return Y%4==0 || year%4 == 0 ? `This ${Y || year} is a leap year`:`This ${Y || year} is not a leap year`
    if(Y%4 === 0 || year%4 ===0){
      return `This ${Y || year} is leap year`
    }else{
      return `This ${Y || year} is not leap year`
    }
}
console.log(findLeapYear(2026))

//  Shop discount

function discount(cost, discount){
  if(true){
    let decimalDiscount = discount / 100;
    let discountAmount = cost * decimalDiscount
    let finalCost = cost - discountAmount
    return `This is your discount ${discount} and total discountAmount is ${discountAmount} and final price of your product is ${finalCost}`
  }
}

// console.log(discount(299, 10))