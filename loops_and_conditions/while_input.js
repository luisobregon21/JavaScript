#!/usr/bin/env node
// script prints from 0 to user input

function main () {
  const prompt = require('prompt-sync')({ sigint: true });
  let idx = 0;
  let num = prompt('Please enter a Number: ');
  num = parseInt(num);

  if (isNaN(num) === false && num !== 10) {
    while (idx <= num) {
      console.log(idx);
      idx++;
    }
    return 0;
  }
  // return -1 on fail
  return -1;
}

if (require.main === module) {
  main();
}
