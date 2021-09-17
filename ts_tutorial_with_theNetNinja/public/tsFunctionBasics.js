"use strict";
var greet;
greet = function () {
    console.log("ni hao");
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
