#!/usr/bin/env node
// script finds the product of the arguements

const a = process.argv[2];
const b = process.argv[3];

if (process.argv.length !== 4) {
  console.log('Please try again with 2 numbers');
} else {
  console.log(`The result of ${a} and ${b} is: ` + a * b);
}
