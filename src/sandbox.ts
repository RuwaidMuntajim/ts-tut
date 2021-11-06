const circ = (diameter: number) => {
  return diameter * Math.PI
}

console.log(circ(7.5))


//arrays
let names = ['yolo', 'people', 'someone', 2, false]
names.push('ts')
names = [...names, 'wds', 2, true]

//objects
let response: boolean;
response = true;
let obj = {
  name: "yolo",
  belt: 'bleakc',
  age: 18
}


// explicit types


let character: string;
let age: number;
let isLoggedIn: boolean;

character = "dsd"
age = 12
isLoggedIn = false


// arrays

let ninjas: string[] = []
ninjas.push("true")
ninjas = [...ninjas, "false", "types"]
console.log(ninjas);
// union types 
let mixedArray: (string | number | boolean)[] = []
mixedArray = [...mixedArray, "true", "sfds", 2, false, false]
console.log(mixedArray)

//objects

let ninjaOne: {
  nums: number,
  name: string,
  isLoggedIn: boolean,
  list: (string | number | boolean)[]
}

ninjaOne = {
  nums: 23,
  name: 'ruwaid',
  isLoggedIn: false,
  list: [2, 3, 4, "string", false]
}

//Any types

let numbers: any = 10
numbers = false

//async function
async function hello() {
  console.log("Hello world!");
}


//function aliases

let greet: (a: number, b: number, c?: number | string) => void = (num1: number, num2: number) => {
    return num1 + num2;
}

greet(2, 3);

let greet2: (b: string, c?: number) => void = (b) => {
  console.log(b)
  return b;
}
