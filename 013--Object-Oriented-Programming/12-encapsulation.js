'use strict'

class Account {
    // Public fields (instances)
    locale = navigator.language;

    // Private fields (instances)
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this.movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${this.owner}!`);
    }

    deposit(val) {
        this.#movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this.approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }
}

const acc_1 = new Account('Huy', 'Dollar', 1111);
acc_1.deposit(200);
acc_1.withdraw(100);
acc_1.requestLoan(9999);
console.log(acc_1);