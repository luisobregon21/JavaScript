#!/usr/bin/env node
 // script calculates total price of a user after shopping

// to use prompt, run 'npm install prompt-sync' on terminal
const prompt = require("prompt-sync")({ sigint: true });
const grocery = {
    Bread: 2,
    Milk: 1.5,
    Cheese: 4,
    Yogurt: 1.2,
};
let total = 0.0;
let shopping = true;

console.log("Hello! Welcome to Luis's humble store!\n");
shopper = prompt("What is your name? ");
console.log(`We hope you find what you need ${shopper}.\n`);
console.log(`${shopper}, we currently have: `);
for (key in grocery) {
    console.log(key + ": $" + grocery[key]);
}
while (shopping) {
    console.log();
    const answer = prompt(`${shopper} would you like to continue shopping? `);
    console.log(`You said: ${answer}\n`);
    if (answer.toUpperCase() === "NO" || answer.toUpperCase() === "N") {
        shopping = false;
    } else {
        let item = prompt("What would you like to get: ");
        item = item.charAt(0).toUpperCase() + item.slice(1);
        if (item === "Milk") {
            const quantity = prompt("How many liters of Milk would you like: ");
            console.log(`You want ${quantity} liters of ${item}\n`);
            total += grocery.Milk * quantity;
        } else if (item in grocery) {
            const quantity = prompt(`How much ${item} do you want: `);
            console.log(`You want ${quantity} ${item}\n`);
            total += grocery[item] * quantity;
        } else {
            console.log(`We are sorry, ${shopper}, we currently don't have ${item}.`);
            console.log(`${shopper}, You can get: `);
            for (key in grocery) {
                console.log(key + ": $" + grocery[key]);
            }
            console.log("Please select a different item");
        }
    }
}
console.log(`${shopper}, the total amount to pay is: $${total}.\n`);
console.log("THank you for stopping by. Have a good day!\n");