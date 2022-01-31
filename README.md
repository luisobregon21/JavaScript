# JavaScript - practice

JavaScript is compact, but flexible. It works for both front-end and backend. JavaScript also adds interactivity to a website.
<p align="center">
  <img src="https://www.freecodecamp.org/news/content/images/2019/07/panel-1-1.png" width="750" height="300" title="meme">
  </p>
 
---

## Basic Syntax
```
#!/usr/bin/env node
var varname;
varname = "Felipe";

console.log("Just printing varriable value: " + varname) // this will print Felipe with the message given
```
---

<img src="https://www.meme-arsenal.com/memes/177207398961a7b5276c5565cf221f58.jpg" height=300 width=400/>

## variables
- String: let str = 'string';
- Number: let num = 7;
- Boolean: let bool = true;
- array: let arr = [7, 'str', 21, 'Yoshi']
- Almost everything in javascript is an object

---

## operators
- add -> (+)
- multiply -> (*)
- subtract -> (-)
- divide -> (/)
- asign -> (=)
- equality -> (===)
- Not -> (!), (!==)
- Division remainder -> (%)

---

## Conditions: if and else
```
syntax:
  if (condition === true) {
      alert('Block of code')
  } else {
      alert('Other block of code')
  }
```
---

## arguements
```
// Include process module
const process = require('process');
  
// Printing process.argv property value
console.log(process.argv);
```

```
Command to run the code:

$ ./index.js extra_argument1 extra_argument2 3

// argv[2] is where the first arguement is at.
Output:

[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\nodejs\\g\\process\\argv_1.js',
  'extra_argument1',
  'extra_argument2',
  '3' 
]
```
## user input
- Prompt() is one of the ways to interact with the user, but to use it you must install the node module. So, in your terminal you must run:
```
$ npm install prompt-sync
```
```
Basic Syntax:  
  prompt = require('prompt-sync')(config)
  var name = prompt('enter name: ', value);
  console.log(`Your name is: ${name}`); // prints out the name given
  
``` 
### About prompt:
```
Prompt (ask, value, opts):
ASK is the label of the prompt, value is the default value in absence of a response.
VALUE: Same as the value parameter, the default value for the prompt. If opts is in the third position, this property will not overwrite the value parameter.
OPTS argument can also be in the first or second parameter position. 

Opts can have the following properties

echo: Default is '*'. If set the password will be masked with the specified character. For hidden input, set echo to '' (or use prompt.hide).

autocomplete: Overrides the instance autocomplete function to allow for custom autocompletion of a particular prompt.

ask: Sames as the value parameter. The prompt label. If opts is not in the first position, the ask parameter will not be overridden by this property.
```
### License

Copyright © 2022, [Luis Obregon](https://github.com/luisobregon21).
