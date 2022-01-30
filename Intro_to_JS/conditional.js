#!/usr/bin/env node
// script tests out if and else
const usr = process.argv[2];

const nica = 'Luis';
const age = 19;

if (process.argv.length !== 3) {
  console.log('Error found, please try again');
} else {
  if (usr === nica) {
    console.log('Hello my name is: ' + nica + '\nMy age is: ' + age);
  } else {
    console.log(usr + ' is not the user');
  }
}
