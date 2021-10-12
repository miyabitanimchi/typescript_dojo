import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
  // can only read inside/outside of class, but can't change the value (even inside)
  // readonly client: string;
  // can read and change value only inside of class
  // private details: string;
  // it's by default so we don't have to explicitly write public
  // public amount: number;

  constructor(
    readonly recepient: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.recepient} is owed $${this.amount} for ${this.details}`;
  }
}
