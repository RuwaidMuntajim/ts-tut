"use strict";
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
//arrays
let names = ['yolo', 'people', 'someone', 2, false];
names.push('ts');
names = [...names, 'wds', 2, true];
//objects
let response;
response = true;
let obj = {
    name: "yolo",
    belt: 'bleakc',
    age: 18
};
// explicit types
let character;
let age;
let isLoggedIn;
character = "dsd";
age = 12;
isLoggedIn = false;
// arrays
let ninjas = [];
ninjas.push("true");
ninjas = [...ninjas, "false", "types"];
console.log(ninjas);
// union types 
let mixedArray = [];
mixedArray = [...mixedArray, "true", "sfds", 2, false, false];
console.log(mixedArray);
//objects
let ninjaOne;
ninjaOne = {
    nums: 23,
    name: 'ruwaid',
    isLoggedIn: false,
    list: [2, 3, 4, "string", false]
};
//Any types
let numbers = 10;
numbers = false;
//async function
async function hello() {
    console.log("Hello world!");
}
//function aliases
let greet = (num1, num2) => {
    return num1 + num2;
};
greet(2, 3);
let greet2 = (b) => {
    console.log(b);
    return b;
};
