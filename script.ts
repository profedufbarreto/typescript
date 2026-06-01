class BankAccount{
    private balance: number;
    public accountHolder: string;
    protected accountNumber: string;

    constructor(accountHolder: string, initialBalance: number, accountNumber: string){
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        this.accountNumber = accountNumber;
    }

    public getBalance(): number{
        return this.balance;
    }

    public deposit(amount: number): void{
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposited: R$ ${amount}`);
        }else{
            console.log("Invalid amoutn!");
        }
    }

    public withdraw(amount: number){
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdrew: R$ ${amount}`);
            console.log("Invalid amount or insufficiente balance!");
        }
    }

    private calculateInterest(): number{
        return this.balance * 0.05;
    }

    public applyInterest(): void{
        let interest = this.calculateInterest();
        this.balance += interest;
        console.log(`Interest applied: R$ ${interest}`);
    }

    public showAccountInfo(): void{
        console.log(`\n ========= ACCOUNT INFO ==========`);
        console.log(`Account Holder: ${this.accountHolder}`);
        console.log(`Balance: R$ ${this.balance}`);
        console.log(`Interest (5%): R$ ${this.calculateInterest()}`);
        console.log(`=====================================`);
    }
}

let account1 = new BankAccount("Eduardo", 1000, "12345");
account1.showAccountInfo();

account1.deposit(500);
console.log(`Current balance: R$ ${account1.getBalance()}`);

account1.withdraw(200);
console.log(`Current balance: R$ ${account1.getBalance()}`);

account1.applyInterest();
account1.showAccountInfo();