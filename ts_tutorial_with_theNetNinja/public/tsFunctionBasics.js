"use strict";
var greet;
greet = function () {
    console.log("ni hao");
};
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
var greetAgain = function (user) {
    console.log(user.name + " says hello");
};
// ? ... optional, this time giving the third argument is optional
// const add = (a: number, b: number, c?: number | string) => {
// below this doesn't need ?
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
// console.log(add(10)); no no
add(2, 10);
// explicitly, you can define data type of a function like below
var minus = function (a, b) {
    return a - b;
};
var result = minus(23, 3); // data type of result is now a number
