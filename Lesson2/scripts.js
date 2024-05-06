let x = 10;
let z = 5;
if (x < 10 && z < 7) {
  console.log("this is truthy");
} else if (x == 10) {
  console.log("second if condition");
} else if (z == 5) {
  console.log("third condition");
} else {
  x < z;
  console.log("this is falsy");
}
let index = 1;
while (index <= 5) {
  console.log("WHILE: The number is " + index);
  index++;
}

//DO While Loop
let y = 1;
do {
  console.log("DO WHILE: The number is " + y);
  y++;
} while (y > 5);

//For Loop

//Array
let colors = ["red", "blue", "green", "black", "yellow"];
let stats = [4.0, 3.7, 5.0];
let multi = [
  ["green", "blue"],
  ["black", "red"],
];

//Object
let person = { name: "Tamara", age: "35", height: "5.9" };
person.name = "Charely";
console.log(person.name);

//Loop Colors Array
for (let i = 0; i < colors.length; i++) {
  console.log("The color is " + colors[i]);
}

for (let stat of stats) {
  console.log(stat);
}

for (let color of colors) {
  console.log(color);
}

for (let prop in person) {
  console.log(prop + " = " + person[prop]);
}

function myFunction(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

let getSum = myFunction(5, 10);
console.log(getSum);

function addItems() {
  console.log("testing");
}

let sports = ["basketball", "football", "soccer"];

function addArray(array) {
  for (let item of array) {
    console.log(item);
  }
}

addArray(sports);
addArray(colors);
addArray(stats);
