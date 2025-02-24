function createStudent(name, age, grade) {
  let studentList = {
    name: name,
    age: age,
    grades: grade,
  };

  return studentList;
}


let studentList = createStudent("Nancy", 16, [10, 10, 7, 4, 7]);

// Store Students in an Array
const students = [];
students.push(createStudent("Nancy", 16, [10, 10, 7, 4, 7]));
students.push(createStudent("Bob", 17, [12, 7, 7, 4, 2]));
students.push(createStudent("Tom", 15, [10, 7, 4, 2, 0]));

console.log(students);

//Calculate Average Grade
// Write a function calculateAverageGrade(student) that takes a student object and returns their average grade.
function calculateAverageGrade(student) {
  //averageGrade of each student
  let totalGrade = 0;
  for (let i = 0; i < student["grades"].length; i++) {
    totalGrade += student["grades"][i];
  }
  return totalGrade / (student['grades'].length);
}

console.log(calculateAverageGrade(studentList));

//4.Find the best student
function findTopStudent(students) {
  //students' names array
  let studentNameArr = [];
  for (let i = 0; i < students.length; i++) {
    studentNameArr.push(students[i]["name"]);
  }
  //find average grade of each student
  let averageGradeArr = [];
  for (let i = 0; i < students.length; i++) {
    averageGradeArr.push(calculateAverageGrade(students[i]));
  }

  //find the biggest number
  let topStudentArr = [];
  let maxAverageGrade = calculateAverageGrade(students[0]);
  for (let i = 0; i < students.length; i++) {
    let averageGradeOfOneStudent = calculateAverageGrade(students[i]);
    if (averageGradeOfOneStudent > maxAverageGrade) {
      maxAverageGrade = averageGradeOfOneStudent;
    }

    for (let i = 0; i < students.length; i++) {
      if (calculateAverageGrade(students[i]) === maxAverageGrade) {
        topStudentArr.push(students[i]["name"]);
      }
    }

    return topStudentArr;
  }
}

console.log(findTopStudent(students));

// 5. Display Student information
function displayStudentInfo(student) {
  for (let i = 0; i < student.length; i++) {
   console.log(`${student[i].name}, Age: ${student[i].age}, Average Grade: ${calculateAverageGrade(student[i])}`)
  }
  return
}

//6.


const newStudentList = [];
newStudentList.push(createStudent("Allan", 20, [10, 10, 7, 4, 7]));
newStudentList.push(createStudent("Betty", 22, [12, 7, 7, 4, 2]));
newStudentList.push(createStudent("Charlie", 21, [10, 7, 4, 2, 0]));
newStudentList.push(createStudent("David", 23, [7, 4, 2, 0, -3]));
newStudentList.push(createStudent("Eva", 20, [12, 7, 10, 2, 12]));
newStudentList.push(createStudent("Grace", 22, [7, 10, 7, 10, 7]));
newStudentList.push(createStudent("Henry", 21, [4, 7, 7, 4, 4]));
newStudentList.push(createStudent("Irene", 23, [2, 7, 7, 4, 0]));

console.log(findTopStudent(newStudentList));
displayStudentInfo(newStudentList)