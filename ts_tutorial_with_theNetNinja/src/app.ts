// classes ...all properties are public by default
class Invoice {
  // can only read inside/outside of class, but can't change the value (even inside)
  // readonly client: string;
  // can read and change value only inside of class
  // private details: string;
  // it's by default so we don't have to explicitly write public
  // public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the mario website", 300);

let invoices: Invoice[] = []; // initialize an array
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  // can still call inv.format() even though details is private
  console.log(inv.client, inv.amount, inv.format());
});

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
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
