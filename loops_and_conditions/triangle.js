#!/usr/bin/env node
 // prints a triangle

const star = "*";

let count = 1;

while (count < 9) {
    console.log(star.repeat(count));
    count += 1;
}