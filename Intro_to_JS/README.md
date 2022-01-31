# Syntax Practice 
#### This directory has basic concepts of javascript like: declaring variables 

 ## variable declaration
 - var
 - let
 - const
 - using nothing

### Var:
var, variable declarations are globally scoped when declared outside a function. In the example the variable greeter is a global variable, while the variable hello is a function scoped variable.
``` 
var greeter = "hey hi";

function newFunction() {
    var hello = "hello";
}
```
var variables can also be re-declared and updated:
```  
var character = "Mario";
var character = "Yoshi";
character = "Luigi";
```
--- 

### let
let variable declarations are preffered. 
- let variables are blocked scoped. A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.
- let variables can be updated, but not redeclared, but if it's redeclared in different block, there won't be any problem.
- let variables, unlike var, are not initialized as undefined
```
    let hola = "say Hi";
    if (true) {
        let hola = "say hola instead";
        console.log(hola); // "say hola instead"
    }
    console.log(hola); // "say Hi"
```
---

### const
- const variable, maintain constant value
- block scoped
- can not be updated or redeclared
- const properties can be updated
```
const person = {
        name: "kaka",
        age: 81
    }
    person.name = "Pele"; // This will print Pele now intead of Kaka
```
---

## printing

<img src="https://miro.medium.com/max/615/1*_cFxBujNYNZR2MXVCXl07g.jpeg" height="250" width="350"/>

#### Console.log() method writes a message in the console
```
Syntax:
    console.log("Message to be given");
```

