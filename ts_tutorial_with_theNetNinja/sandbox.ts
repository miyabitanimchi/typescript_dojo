/* ----------- Data types -------------*/

// define data type for the parameter
const circumfenrence = (diameter: number) => {
  return diameter * Math.PI;
};
console.log(circumfenrence(20));

/* -------------- Array ---------------*/
let numbers = [1, 3, 55, 100];
// you can't do this
// numbers[0] = "hi";
// can't do this either
// numbers = "hello";

let mixedDataTypes = ["miyabi", 4, "hi", true];
// ok
mixedDataTypes[0] = 2021;

/* -------------- Object ---------------*/
let teamMember = {
  name: "zelda",
  role: "debugger",
  age: 24,
};
// nope
// teamMember.age = "24"
// nope
// teamMember.skills = ["sales", "acountant"];

// ok
teamMember = {
  name: "link",
  role: "backend developer",
  age: 23,
};

// no no
// teamMember = {
//   name: "link",
//   role: "backend developer",
//   age: 23,
//   skills: ["sales", "acountant"],
// };

/* -------------- Explicit Types ---------------*/
// you can define just data types first like below,

let character: string;
let age: number;
let isLoggedIn: boolean;
let list: string[];
// then can assign the actual values
character = "salut";

// list.push("mia") ... can't do this cuz let list: string[];
// doesn't mean it's initialized yet
let list2: number[] = [];
list2.push(2); // we can push it

/* -------------- Union Types ---------------*/
let mixedArr: (string | number)[] = [];

let uid: string | number;

/* ----------------- Objects------------------*/
let obj1: object;
obj1 = { name: "mia", age: "12" };
obj1 = []; // this is allowed... because an array is kind of an object

let student: {
  name: string;
  age: number;
  isFailed: boolean;
};

// how to compile... tsc filename.ts -w
