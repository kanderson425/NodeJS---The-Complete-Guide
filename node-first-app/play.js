// let name = "Max";
// let age = 29;
// let hasHobbies = true;

// age = 30;

// function summarizeUser(usernName, userAge, userHasHobby) {
//   return (
//     "Name is " +
//     usernName +
//     ", age is " +
//     userAge +
//     " and the user has hobbies: " +
//     userHasHobby
//   );
// }

// const add = (a,b) => a + b;
// const addOne = a => a + 1;

const addRandom = () => 1 + 2;

// console.log(add(1, 2));

// console.log(summarizeUser(name, age, hasHobbies));

const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

// Destructuring
// const printName = ({ name, age, greet }) => {
//   console.log(age);
// };

// printName(person);

// const { name, age } = person;
// console.log(name);

const hobbies = ["sports", "cooking"];
const [hobby1, hobby2] = hobies;
console.log(hobby1, hobby2);

// const copiedPerson = { ...person };

// const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(
//   hobbies.map((hobby) => {
//     return "Hobby: " + hobby;
//   })
// );

// const copiedArray = hobbies.slice();
// const copiedArray = [...hobbies];
// console.log(copiedPerson);

// Rest Operator
// const toArray = (...args) => {
//   return args;
// };

// console.log(toArray(1, 2, 3, 4));
