#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Enter Your Account Id : ",
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter Your Account Pin : ",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["current", "saving"],
        message: "Select Your Account Type : ",
    },
]);
if (answer.userId && answer.userPin) {
    if (answer.accountType === "current") {
        // Current account logic (Fast Cash or Withdraw)
        const currentOptions = await inquirer.prompt([
            {
                type: "list",
                name: "TransactionType",
                choices: ["Fast Cash", "Withdraw"],
                message: "Select Your Transaction Type : ",
            },
        ]);

        if (currentOptions.TransactionType === "Fast Cash") {
            const fastCashOptions = await inquirer.prompt([
                {
                    type: "list",
                    name: "amount",
                    choices: [500, 1000, 1500, 2000, 2500, 3000],
                    message: "Select your Amount : ",
                },
            ]);
            console.log(chalk.blue.bold(`You have selected Fast Cash with amount: ${fastCashOptions.amount}`));
            const balan = 9500000;
            const rem = balan - fastCashOptions.amount
            console.log(chalk.red("your remaining amount is :" , rem));
        } else if (currentOptions.TransactionType === "Withdraw") {
            const withdrawOptions = await inquirer.prompt([
                {
                    type: "number",
                    name: "amount",
                    message: "Enter your Amount : ",
                },
            ]);
            const bal = 9500000; // Replace with actual balance logic
            const EnterAmount = withdrawOptions.amount;
            if (bal >= EnterAmount) {
                const remaining = bal - EnterAmount;
                console.log(chalk.red(`Your Remaining Amount is : ${remaining}`));
            } else {
                console.log(chalk.greenBright("There is no amount left in your account."));
            }
        }
    } else if (answer.accountType === "saving") {
        // Saving account logic
        const bal = 9500000; // Replace with actual saving balance logic
        console.log(chalk.bgCyanBright(`Your total saving amount in your account is: ${bal}`))
        
        
    }
}