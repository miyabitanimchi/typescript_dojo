"use strict";
/* ----------- Data types -------------*/
// define data type for the parameter
var circumfenrence = function (diameter) {
    return diameter * Math.PI;
};
console.log(circumfenrence(20));
/* -------------- Array ---------------*/
var numbers = [1, 3, 55, 100];
// you can't do this
// numbers[0] = "hi";
// can't do this either
// numbers = "hello";
var mixedDataTypes = ["miyabi", 4, "hi", true];
// ok
mixedDataTypes[0] = 2021;
/* -------------- Object ---------------*/
var teamMember = {
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
var character;
var age;
var isLoggedIn;
var list;
// then can assign the actual values
character = "salut";
// list.push("mia") ... can't do this cuz let list: string[];
// doesn't mean it's initialized yet
var list2 = [];
list2.push(2); // we can push it
/* -------------- Union Types ---------------*/
var mixedArr = [];
var uid;
/* ----------------- Objects------------------*/
var obj1;
obj1 = { name: "mia", age: "12" };
obj1 = []; // this is allowed... because an array is kind of an object
var student;
/* ----------------- Dynamic Types ------------------*/
// but then why we use TypeScript? this can only be for some rare cases!
var year = 100;
year = true;
year = "2020";
year = { year: 2021 };
var mixedVal = [];
mixedVal.push(5);
mixedVal.push("hiiii");
mixedVal.push(true);
var obj2;
obj2 = {
    name: 2222,
    number: true,
};
// how to compile... tsc filename.ts -w
