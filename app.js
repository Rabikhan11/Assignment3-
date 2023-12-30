
// q1
// let result;
// let score=100;
//  (score >= 80) ? result = "Pass": result = "Fail";
//  console.log(result);

// q2
// let students={
//     schoolName:"PM PUBLIC SCHOOL",
//     city:"karachi",
//     Area:"Nazimabad",
// std1:{
//     name:"rabia",
//     class:"five",
//     gender:"female",
//     std2:{
//         name:"salwah",
//         class:"six",
//         gender:"female",
//     }
// }
// }
// console.log(students.std1.name);
// console.log(students?.female?.hania);
// it does not show error it only show undefined if the prop is exist or not

//q 3
// for in loop
// let fruits={
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5,

// }
// for(let key in fruits){
//     console.log(key);
// }

// for of
// let arr=[1,2,3,4,5]
// for (let value of arr) {
//   console.log(value); 
// }

//q4)
// function average(arr) {
//     let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     console.log("The average is:", sum / arr.length);
//   }
//   average([4, 4, 4]);
// q5)

// function outerFunction() {
//   let outerVariable = 'HEY the outer function'; // Variable defined in outerFunction

//   function innerFunction() {
//     console.log(outerVariable); // Accessing outerVariable from the enclosing scope
//   }

//   return innerFunction; // Return the inner function
// }

// const myFunction = outerFunction(); // Call outerFunction and store the returned innerFunction in myFunction
// myFunction(); // Call myFunction, which still has access to outerVariable


// 6)
// const student = {
//     name: 'Rabia',
//     age: 20,
//     grades: [85, 90, 78, 92, 88], // Sample grades array

//     calculateAverage: function() {
//       const totalGrades = this.grades.reduce((total, grade) => total + grade, 0);
//       const average = totalGrades / this.grades.length;
//       return average;
//     }
//   };

//   // Calculate and display the average grade
//   const averageGrade = student.calculateAverage();
//   console.log(`Student ${student.name}'s average grade is: ${averageGrade}`);

// Q7
// ShallowCopy
// const rabiaOrig = {a: 1, b: 2,c: {d: 3,},};
// const aribaShallow = {...rabiaOrig}
// rabiaOrig.c.d = 12;
// console.log(aribaShallow);

// ReferenceCopy
// const originalObject = { a: 1, b: { c: 2 } };
// const referenceCopy = originalObject;
// originalObject.b.c = 3; // Modifying nested property in the original object
// console.log(referenceCopy); // Output: { a: 1, b: { c: 3 } }

// DeepCopy
// const originalObject = { a: 1, b: { c: 2 } };
// const deepCopy = JSON.parse(JSON.stringify(originalObject));
// originalObject.b.c = 3; // Modifying nested property in the original object
// console.log(deepCopy); 

//  q8
// const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//   const result = numbers[i] % 2 === 0 ? 'even' : 'odd';
//   console.log(`${numbers[i]} is ${result}`);
// }

// 

// q9
// i have put syntax in word file because this question require only theory

// q10
// const users = [
//     { name: 'Aliza', age: 25, address: { city: 'New York', country: 'USA' } },
//     { name: 'Babar', age: 30 },
//     { name: 'shazia', age: 28, address: { city: 'London', country: 'UK' } }
// ];
// for (const user of users) {
//     const city = user.address?.city;
//     if (city) {
//         console.log(`${user.name} lives in ${city}`);
//     } else {
//         console.log(`${user.name} does not have an address.`);
//     }
// }
// q11)
// const myObject = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//     occupation: 'Engineer'
// };
// for (let prop in myObject) {
//  console.log(prop,myObject[prop]);  
// }

// q12)
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let target = 7;
  
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === target) {
//       console.log('found at index :', i);
//       break; 
//     }
//   }
  //   for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//       continue;
//     }
//     console.log(i);
//   }

// q13)
// function calculateTax(income) {
//         let taxRate;
//         let taxAmount;
//         if (income <= 60000) {
//           taxRate = 0.1; // 10% 
//         } else if (income <= 70000) {
//           taxRate = 0.15; // 15% 
//         } else {
//           taxRate = 0.2; // 20% 
//         }
//         taxAmount = income * taxRate;
//         return taxAmount;
//       }
//       const income1 = 5000;
//       const income2 = 20000;
//       console.log('Tax amount of income1', calculateTax(income1));
//       console.log('Tax amount of income2', calculateTax(income2));


// q14
// const car = {
//     make: "Civic",
//     model: "C10",
//     startEngine: function() {
//       console.log("My Car engine is start like buZZZZ");
//     }
//   };
//   car.startEngine();

  // q15
// const obj = {
//     name: 'SANIA',
//     greet: function() {
//         console.log(`Hello, ${this.name}!`);
//     }
// };
// obj.greet();

// const obj = {
//     name: 'ALIZA',
//     greet: () => {
//         console.log(`Hello, ${this.name}!`);
//     }
// };

// obj.greet();

// function RegularFunction(){
  //         this.value=89
  //         this.method = function(){
  //             console.log(this.value);
  //         };
  //     }
  //     const regularConstructor = new RegularFunction()
  //     regularConstructor.method();
      
      //   function ArrowFunction(){
      //     this.value=90
      //     this.method = () => {
      //         console.log(this.value);
      //     };
      // }
      // const arrowConstructor = new ArrowFunction()
      // arrowConstructor.method();
  







































