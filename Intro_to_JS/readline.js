#!/usr/bin/env node

const prompt = require("prompt-sync")({ sigint: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

total = 0;
console.log("Welcome to my shop!\n");
var recursiveAsyncReadLine = function() {
    rl.question(
        "Please Choose an item:\n" +
        "1) Milk\n" +
        "2) Yogurt\n" +
        "3) Bread\n" +
        "4) Exit\n",
        function(line) {
            switch (line) {
                case "1":
                    console.log("Milk is $1.5 per liter");
                    const answer = prompt("How much milk would you like? ");
                    console.log(`you want ${answer} liters of Milk`);
                    total += 1.5 * answer;
                    break;
                case "2":
                    console.log("Yogurt is $1.20 per liter");
                    const answer1 = prompt("How much Yogurt would you like? ");
                    console.log(`you want ${answer1} Yogurt`);
                    total += 1.2 * answer1;
                    break;
                case "3":
                    console.log("bread is $2.00 per liter");
                    const answer2 = prompt("How much Bread would you like? ");
                    console.log(`you want ${answer2} Bread`);
                    total += 2 * answer2;
                    break;
                case "4":
                    console.log("Your total is: " + total);
                    return rl.close();
                    break;
                default:
                    console.log("No such option. Please enter another: ");
            }
            recursiveAsyncReadLine(); //Calling this function again to ask new question
        }
    );
};

recursiveAsyncReadLine();