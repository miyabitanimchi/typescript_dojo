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
import { ListTemplate } from "./classes/ListTemplate.js";
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

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number]; // tuples
  values = [tofrom.value, details.value, amount.valueAsNumber];
  let doc: HasFormatter;
  if (type.value === "invoice") {
    // doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    doc = new Invoice(...values);
  } else {
    // doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    doc = new Payment(...values);
  }
  list.render(doc, type.value, "end");
});

/* Generics... */
// Generics are a tool that allows you to create reusable code components that work with a number of types instead of a single type.
// they provide a way to make components work with any data type and not restrict to one data type.
const addUID = <T>(obj: T) => {
  // T as type
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
let docOne = addUID({ name: "mia", age: 22 });
let docTwo = addUID("hi hi"); // can do it cuz T is not specified

console.log(docOne.name);

const addUID2 = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
let docOne2 = addUID2({ name: "mia", age: 22 });
// let docTwo2 = addUID2("hi hi"); // can't do it cuz now T is more specified

console.log(docOne2.name);

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<string> = {
  uid: 1,
  resourceName: "person",
  data: "shaun",
};

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: "shoppingList",
  data: ["bananas", "eggs", "cheese"],
};

/* Enums... */
// each value is associated with number
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}
interface Resource2<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docFive: Resource2<object> = {
  uid: 1,
  resourceType: ResourceType.FILM,
  data: { title: "perfait" },
};

const docSix: Resource2<object> = {
  uid: 1,
  resourceType: ResourceType.PERSON,
  data: { name: "liah" },
};

console.log(docSix); //{uid: 1,resourceType: 4, ... indexdata: {name: "liah"},}

/* Tuples... */
let arr = ["miii", 25, true];
arr[0] = 10;
arr = [false, "aaaa", 12];

let tup: [string, number, boolean] = ["alex", 15, true];
// tup[1] = "james"; // can't do it
