#!/usr/bin/env node
// print all numbers from 0 to 10

let num = 0;

/* usinng for loops */
console.log('STARTING WITH FOR LOOPS\n');
for (num = 0; num <= 10; num++) {
  console.log(`This is the num: ${num}`);
}

/* using while loops */
num = 0;

console.log('\nWE ARE NOW USING WHILE LOOPS\n');
while (num <= 10) {
  console.log(`This is the num: ${num}`);
  num += 1;
}

num = 0;
console.log('\nWE ARE NOW USING DO...WHILE LOOPS\n');
/* using do...while loops */
do {
  console.log(`This is the num: ${num}`);
  num += 1;
} while (num <= 10);
