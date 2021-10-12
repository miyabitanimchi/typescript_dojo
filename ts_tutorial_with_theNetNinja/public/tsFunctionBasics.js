"use strict";
let greet;
greet = () => {
    console.log("ni hao");
};
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
// ? ... optional, this time giving the third argument is optional
// const add = (a: number, b: number, c?: number | string) => {
// below this doesn't need ?
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
// console.log(add(10)); no no
add(2, 10);
// explicitly, you can define data type of a function like below
const minus = (a, b) => {
    return a - b;
};
let result = minus(23, 3); // data type of result is now a number
