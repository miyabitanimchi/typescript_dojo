// interfaces
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }

// const me: IsPerson = {
//   name: "miyabi",
//   age: 17,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log("I spent", amount);
//     return amount;
//   },
// };

// const greetPerson = (person: IsPerson) => {
//   console.log("hello", person.name);
// };

// console.log(me);

import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
// ! .js, not .ts!

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("yoshi", "web work", 250);
// docTwo = new Payment("luigi", "plumbing work", 400);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// const invOne = new Invoice("mario", "work on the mario website", 250);
// const invTwo = new Invoice("luigi", "work on the mario website", 300);

// let invoices: Invoice[] = []; // initialize an array
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach((inv) => {
//   // can still call inv.format() even though details is private
//   console.log(inv.client, inv.amount, inv.format());
// });

const anchor = document.querySelector("a")!; // or, put excramation mark at the end

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
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  console.log(doc);
});
