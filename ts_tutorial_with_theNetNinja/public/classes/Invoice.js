export class Invoice {
    // can only read inside/outside of class, but can't change the value (even inside)
    // readonly client: string;
    // can read and change value only inside of class
    // private details: string;
    // it's by default so we don't have to explicitly write public
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
