"use strict";
// classes ...all properties are public by default
var Invoice = /** @class */ (function () {
    // can only read inside/outside of class, but can't change the value (even inside)
    // readonly client: string;
    // can read and change value only inside of class
    // private details: string;
    // it's by default so we don't have to explicitly write public
    // public amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work on the mario website", 250);
var invTwo = new Invoice("luigi", "work on the mario website", 300);
var invoices = []; // initialize an array
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    // can still call inv.format() even though details is private
    console.log(inv.client, inv.amount, inv.format());
});
var anchor = document.querySelector("a"); // or, put excramation mark at the end
// one of the ways ... runtime check
// if (anchor) {
//   console.log(anchor.href);
// }
console.log(anchor.href);
// why it couses? Because ts doesn't know whether there is an anchor tag in the
// index page during the developments, it doesn't have some kind of special access
// to the index page to be able to find out
// with only this, ts doesn't know which element the class is with
// const form = document.querySelector(".new-item-form")!;
// so what we need to do is "Type Casting"
var form = document.querySelector(".new-item-form");
console.log(form.children);
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
