//class exercise
//Warm up exercise
//2.
const userName = "Alice";
const age = 16;
const country = "USA";
let message = "";
let ageStatus = "";

if (age < 18) {
  ageStatus = "minor";
} else {
  ageStatus = "adult";
}

message = `${userName} is a ${ageStatus} from ${country}.`;

console.log(message); // Alice is a minor from USA.
// the problem is with 'status' and 'status'. We should avoid using these names as variable names.

//Why is my code not working?
const canSee = true;
let room;
if (canSee) {
  room = "This room is not dark";
} else {
  room = "This room is pitch black";
}
console.log(room);

// 0.3 Data types
const team = "Team 31";
const numberOfStudents = 11;
const booleanValue = true;
const testValue = null;

console.log(typeof team);
console.log(typeof numberOfStudents);
console.log(typeof booleanValue);
console.log(typeof testValue);

//guess
const a = 10;
const b = -10;
const c = "100";
const d = "no";
const e = true;
const f = false;
const g = undefined;

console.log("#1", a + a, typeof (a + a)); // output is "#1 20 number"

// guess the output of the following statements
console.log("#2", a + b, typeof (a + b));
console.log("#3", a + c, typeof (a + c));
console.log("#4", a + d, typeof (a + d));
console.log("#5", a + e, typeof (a + e));
console.log("#6", a + f, typeof (a + f));
console.log("#7", a + g, typeof (a + g));

// 0.4 Conditions
// Write a function that takes a user’s age as input and prints whether they are a child (0-12), a teenager (13-19), or an adult (20+).
// Create a function that asks for a number and prints whether it is positive, negative, or zero.
// Write a function that checks if a given year is a leap year (Hint: A leap year is divisible by 4).

//1.
function userAge(userAge) {
  if (userAge <= 0) {
    console.log("Please enter the correct age.");
    return;
  }
  if ((userAge < 13) & (userAge > 0)) {
    console.log("The user is a child");
    return;
  } else if ((userAge >= 13) & (userAge < 20)) {
    console.log("The user is a teenager");
    return;
  } else {
    console.log("The user is an adult");
    return;
  }
}

userAge(13);

//2.
function numberType(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "Please enter a number";
  }

  if (num === 0) {
    return "This is a positive number";
  }
  if (num < 0) {
    return "This is a negative number";
  }

  if (num > 0) {
    return "This is a positive number";
  }
}

console.log(numberType("hello"));
console.log(numberType(50));

//3.
function leapYear(year) {
  if (year % 4 === 0) {
    return `${year} is leap year`;
  } else {
    return `${year} is not leap year`;
  }
}

console.log(leapYear(2024));
//  0.5 Loops
// Print numbers from 1 to 10 using a for loop.
// Print a countdown from 10 to 1 using a for loop.
// Print even numbers between 1 and 20 using a for loop.
// Use a for...of loop to print each value in this array:
// const names = ["john", "jane", "joe"];

//1.
function printNumber(a, b) {
  for (let i = a; i <= b; i++) {
    console.log(i);
  }
  return;
}

printNumber(1, 10);

function countDownNumber(a, b) {
  for (let i = b; i >= a; i--) {
    console.log(i);
  }
  return;
}

countDownNumber(1, 10);

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

const names = ["john", "jane", "joe"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// 0.6 Arrays
// Create an array of five favorite foods and print each item using a for..of loop.
// Write a function that takes an array of numbers and returns the sum of all elements. What is the sum of [5, 10, -98, 17.5, 365, -2.5]?
// Given an array [10, 20, 30, 40, 50], write code to remove the last element and add 60 at the end.
// Write a function that finds the largest number in an array

//2.
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const arr = [5, 10, -98, 17.5, 365, -2.5];

console.log(sumArray(arr));

//3.
let arr1 = [10, 20, 30, 40, 50];
arr1.pop();
arr1.push(60);
console.log(arr1);

//4.
function maxNumberInArray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
return max
}

console.log(maxNumberInArray(arr))

//7.
// Create an object representing a book with properties: title, author, and yearPublished.

const obj={
  title: "Jane Eyre",
  author:"Charlotte Bronte",
  yearPublished:1847,
}

function book(obj){
  return `${obj["title"]} by ${obj["author"]}, published in ${obj["yearPublished"]}`;
}

console.log(book(obj))

function getAge(obj){
const currentYear= new Date().getFullYear()
 
const bookAge = currentYear - obj.yearPublished

return `The book is ${bookAge} years old`

}

console.log(getAge(obj))

