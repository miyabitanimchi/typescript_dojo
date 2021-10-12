export class Payment {
    // can only read inside/outside of class, but can't change the value (even inside)
    // readonly client: string;
    // can read and change value only inside of class
    // private details: string;
    // it's by default so we don't have to explicitly write public
    // public amount: number;
    constructor(recepient, details, amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recepient} is owed $${this.amount} for ${this.details}`;
    }
}
