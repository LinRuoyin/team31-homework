// Homework 1 : Age-ify
const yearOfBirth =1987
const yearFuture = 2027

const age = yearFuture - yearOfBirth
console.log(`You will be ${age} years old in ${yearFuture}`)

// Homework 2 : Goodboy-Oldboy (A dog age calculator) 
let dogYearOfBirth = 2017
let dogYearFuture = 2027
let dogYear = dogYearFuture-dogYearOfBirth
let shouldShowResultInDogYears = true
if(shouldShowResultInDogYears){
  console.log(`Your dog will be ${dogYear*7} dog years old in ${dogYearFuture}`)
}else {
  console.log(`Your dog wille be ${dogYear} human years old in ${dogYearFuture}`)
}

// Homework 3 : Housey pricey (A house price estimator)


function housePrice(width,depth,height,gardenSizeM2){
  let volumeInMeters= width*depth*height
  let housePrice = volumeInMeters*2.5*1000 + gardenSizeM2*300
  return housePrice
}

if(housePrice(8,10,10,100)<2500000){
  console.log('Peter paid too much')}
  else{
    console.log('Peter paid too little')
  } 

  if (housePrice(5,11,8,70)<1000000){
    console.log('Julia paid too much')
  }else{
    console.log('Julia paid too little')
  }

// Homework 4 : Ez Namey (Startup name generator) Optional 
const firstWords = ["Easy", "Awesome", "Creative", "Dynamic", "Bold", "Bright", "Next", "Smart", "Happy", "Future"]
const secondWords = ["Solutions", "Corporation", "Ventures", "Technologies", "Designs", "Concepts", "Enterprises", "Works", "Studios", "Hub"]

const randomNumber= Math.floor(Math.random()*10)

let startupName= firstWords[randomNumber]+ ' ' + secondWords[randomNumber]
console.log(`The startup: "${startupName}" contains ${startupName.length} characters`)
