"use strict";
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}`);
        }
        else {
            console.log('Invalid deposit amount.');
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: $${amount}`);
        }
        else {
            console.log('Invalid withdrawal amount or insufficient funds.');
        }
    }
}
class ATM {
    constructor(initialBalance) {
        this.bankAccount = new BankAccount(initialBalance);
    }
    checkBalance() {
        console.log(`Your account balance: $${this.bankAccount.getBalance()}`);
    }
    deposit(amount) {
        this.bankAccount.deposit(amount);
    }
    withdraw(amount) {
        this.bankAccount.withdraw(amount);
    }
}
// Example usage:
const atm = new ATM(1000);
atm.checkBalance();
atm.deposit(200);
atm.checkBalance();
atm.withdraw(50);
atm.checkBalance();
atm.withdraw(1000); // This should display an error message due to insufficient funds.
