function xyz() {
  document.getElementById("abc").innerHTML =
    "Now JS changed existing html content";
}

xyz();

function msg() {
  document.getElementById("abc").innerHTML = "changed";
}

msg();

//primitive data type
var a = 10;
a = 9.99;
var abc = true;
var s = "some text";
var ab;

console.log("a: " + a);
console.log(`a, another one: ${a}`);
console.log(a, abc, s, ab);
console.log(typeof abc, typeof s, typeof ab);

//non-primitive data type

var arr = [1, 2, 3, 4, 5, 6];
var b = ["hi", "how", "are", "you"];
console.log(arr);
console.log(b);

arr[1] = 1.5;
b[1] = "hello";

console.log(`arr`, arr);
console.log(`b`, b);


var emp = {
  name: "ricky",
  id: 101,
};

console.log(emp);

//function without parameters

function fname() {
  console.log("print this when i call the function");
}

fname();

//function with parameter

function add(num1, num2) {
  console.log(num1 + num2);
}

add(1, 2);

//recent update using arrow

var functionName = () => console.log("this is using arrow");
functionName();

var add1 = (num1, num2) => console.log(num1 + num2);

add1(2 + 2);

// var let const
var b = 20;
let c = 10;
const d = 20;

// d = c; //cant assign to const 

console.log(b, c, d);

//returning some value

const multi = (n1, n2) => {
  return n1 * n2;
};

let result = multi(2, 2);
console.log(result);

//conditional statements
var marks = 80;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else {
  console.log("You failed!");
}

