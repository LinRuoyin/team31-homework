// function getFullname(firstname, surname) {
//   return firstname + " " + surname;
// }

// const fullname1 = getFullname("Benjamin", "Hughes");

// const fullname2 = getFullname("Nina", "Lin");

// console.log(fullname1);
// console.log(fullname2);

//formal fullname
function getFullname(firstname, surname, useFormalName) {
  if (useFormalName) {
    return "Lord" + firstname + " " + surname;
  } else {
    return firstname + " " + surname;
  }
}

// But what if the person is a woman? Describe how you would fix the getFullname so it also works for women?

// //  function getFullname(firstname, surname, gender, useFormalName) {
// if(useFormalName){
//   if(gender='female'){
//     return "Lady" + firstname + " " + surname;}
//   else{ return "Lord" + firstname + " " + surname;}
// } else {
//   return firstname + " " + surname;}
// }

// Event application 
function getEventWeekday(dayToEvent){
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date()
  const todayIndex = today.getDay()
  const dayOfEventIndex=  (dayToEvent + todayIndex) % 7;
  return days[dayOfEventIndex];
}

console.log(getEventWeekday(9));

// Weather wear 
function whatToWear(temperature){
  if(temperature <= 0){
    return "Wear a winter coat, boots and a hat";
  } else if(temperature>0 && temperature <= 10){
    return "Wear a jacket and a hat";
  } else if(temperature >10 && temperature <= 20){
    return "Wear a jacket";
  } else if(temperature >20 && temperature <= 30){
    return "Wear a t-shirt and shorts";
  } else {
    return "Wear a tanktop and shorts";
  }
}

console.log(whatToWear(50)); 

// Student manager 
const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName === "Queen" && !class07Students.includes('Queen')) {
   class07Students.push(studentName);
   return class07Students
  } else if (class07Students.includes(studentName)){
     console.log(`Student ${studentName} is already in the class`);
     return 'error'
  } else if (studentName === "") {
  console.log("Please enter a valid name");
   return 'error'
  } else if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
    return "error";
  } else {
    class07Students.push(studentName);
    return class07Students;
  }


}

function getNumberOfStudents() {
  return class07Students.length;
}

console.log(addStudentToClass('Benjamin'))
console.log(addStudentToClass('Nina'))  
console.log(addStudentToClass('Nina'))
console.log(addStudentToClass('Nancy'))
console.log(addStudentToClass('Tom'))
console.log(addStudentToClass('Jerry'))
console.log(addStudentToClass(''))
console.log(addStudentToClass('Gary'))
console.log(addStudentToClass('Queen'))
console.log(addStudentToClass('Queen'))
console.log(addStudentToClass('Jenny'))

console.log(getNumberOfStudents())


// Candy helper optional 
const boughtCandyPrices = [];
function addCandy(candyType, weight){
  if(candyType === "sweet"){
    boughtCandyPrices.push(weight * 0.5);
  } else if(candyType === "chocolate"){
    boughtCandyPrices.push(weight * 0.7);
  } else if(candyType === "toffee"){
    boughtCandyPrices.push(weight * 1.1);
  } else if(candyType === "chewing-gum"){
    boughtCandyPrices.push(weight * 0.03);
  }
  return boughtCandyPrices
}


const amountToSpent = Math.random() * 100;

function canBuyMoreCandy(boughtCandyPrices){
let total = 0
for (let i=0; i<boughtCandyPrices.length; i++){
  total += boughtCandyPrices[i];
  if (total >= amountToSpent){
    console.log(`Enough candy for you!`)
    return false;
  }else {
    console.log(`You can buy more, so please do!`)
    return true;
  }
}}

addCandy("sweet", 20);
addCandy("chocolate", 10);
addCandy("toffee", 30); 
console.log(addCandy("chewing-gum", 50))



console.log(canBuyMoreCandy(boughtCandyPrices))