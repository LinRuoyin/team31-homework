//codewar1:
//Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  str.split("").forEach((letter) => {
    if (vowel.includes(letter)) {
      count++;
    }
  });
  return count;
}

//2Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!
function squareDigits(num) {
  const arr = num.toString().split("").map(Number);
  const squareArr = [];
  for (let i = 0; i < arr.length; i++) {
    squareArr.push(arr[i] * arr[i]);
  }

  return Number(squareArr.join(""));
}

//3.In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
function highAndLow(numbers) {
  const numArr = numbers.split(" ").map(Number);
  const maxNum = Math.max(...numArr);
  const minNum = Math.min(...numArr);
  return `${maxNum} ${minNum}`;
}

//Voice Assistant
let userName = "";
let toDoList = [];
function getReply(command) {
  command = command.toLowerCase();

  if (command.includes("hello my name is")) {
    if (userName !== "") {
      return `I know your name already`;
    }
    userName = command.replace("hello my name is", "").trim();

    userName = userName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return `Nice to meet you ${userName}.`;
  }

  if (command.includes("what is my name")) {
    if (userName === "") {
      return "Sorry, I don't know yet.";
    }
    return `Your name is ${userName}.`;
  }

  if (command.startsWith("add")) {
    const toDoItem = command
      .replace("add", "")
      .replace("to my todo", "")
      .trim();
    toDoList.push(toDoItem);
    return `${toDoItem} added to your todo`;
  }

  if (command.startsWith("remove")) {
    const removedItem = command
      .replace("remove", "")
      .replace("from my todo")
      .trim();
    const index = toDoList.indexOf(removedItem);

    //what if this item is not in the toDoList
    if (index !== -1) {
      toDoList.splice(index, 1);
      return `Removed ${removedItem} from your todo`;
    } else {
      return "You don't have this item in your todo";
    }
  }

  if (command.includes("what is on my todo")) {
    let toDoListLength = toDoList.length;
    if (toDoListLength === 0) {
      return "You don't have anything on your todos";
    } else {
      return `You have ${toDoListLength} todos - ${toDoList.join(" and ")}`;
    }
  }

  if (command.includes("what day is it today")) {
    const now = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    let todayDate = now.toLocaleDateString("en-GB", options);

    todayDate = todayDate.split(" ");

    return `${todayDate[0]}. of ${todayDate[1]} ${todayDate[2]}`;
  }

  const operators = ["+", "-", "*", "/", "%"];
  const wrongMath = ["/ 0", "% 0", "/0", "%0"];

  if (operators.some((op) => command.includes(op))) {
    if (wrongMath.some((op) => command.includes(op))) {
      return "Number can not be divided by 0.";
    }
    const mathStr = command.replace("what is", "").trim();

    return Function(`return ${mathStr}`)();
  }

  //set a timer for 4 mins
  if (command.includes("timer")) {
    const timeoutId = setTimeout(() => {
      console.log(`Timer done!`);
    }, 240000);
  }

  // add one or more command to your voice assistant

  if (command.includes("create a button")) {
    const button = document.createElement("button");
    button.innerHTML = "Click me";
    button.style.backgroundColor = "pink";
    document.body.appendChild(button);
    button.addEventListener("click", function () {
      alert(`Thank you for clicking! Love ya!`);
    });
  }

  const lunchMenu = [
    "sandwich",
    "open sandwich",
    "steak",
    "yogurt",
    "an apple",
    "nothing, you are on a diet!",
    "leftover from last night",
    "Let's dine out",
    "Lamb",
    "chicken",
  ];
  if (command.includes("for lunch")) {
   let numberForLunch = Number(
      prompt("You wanna know what's for lunch? Please enter a number 1-10")
    );

    while(
      typeof numberForLunch !== "number" ||
      !Number.isInteger(numberForLunch) ||
      numberForLunch > 10 ||
      numberForLunch < 1
    ) {
      alert(`Please enter the right number`);
      numberForLunch = Number(
        prompt("You wanna know what's for lunch? Please enter a number 1-10")
      );
    } 

      alert(`Lunch for today is ${lunchMenu[numberForLunch - 1]}`);
    }
  }


console.log(getReply(`Hello my name is Benjamin Jensen`));

console.log(getReply("what day is it today"));
console.log(getReply("What is 3*4"));
getReply("timer set for 4 minutes");
getReply("create a button");
getReply("what's for lunch ");
