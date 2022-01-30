#!/usr/bin/env node
// prints user message on the log

// Include process module
const process = require('process');
const input = process.argv.slice(2);

if (process.argv.length < 3) {
  console.log('Too little arguements, please try again.');
} else {
  for (const idx in input) {
    console.log(input[idx]);
  }
}
