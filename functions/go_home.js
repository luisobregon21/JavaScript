#!/usr/bin/env node
 // checks if person is allow to go to the club

function checkAge(name, age) {
    if (!age) {
        return "WHAT DO YOU MEAN YOU DON'T HAVE AN AGE!!?";
    }
    if (!name) {
        return "WHAT DO YOU MEAN YOU DON'T HAVE A NAME!!!!!?";
    }

    if (age < 21) {
        return `Go home, ${name}!`;
    } else {
        return `Welcome ${name}! Ready to party?`;
    }
}