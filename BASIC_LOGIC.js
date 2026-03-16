// Two numbers swap karo (with temp) - Done

let a = 10;
let b = 20;

let temp;

temp = a;
a = b;
b = temp;

console.log("a =", a);
console.log("b =", b);

// Two numbers swap karo (without temp) - Done

let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log("a =", a);
console.log("b =", b);

// Even ya odd check karo - Done

let num = 7;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Positive / negative / zero check karo - Done

let num = -5;

if (num > 0) {
    console.log("Positive");
} 
else if (num < 0) {
    console.log("Negative");
} 
else {
    console.log("Zero");
}

// Largest of 3 numbers find karo - Done

let a = 10;
let b = 25;
let c = 15;

if (a >= b && a >= c) {
    console.log("Largest:", a);
}
else if (b >= a && b >= c) {
    console.log("Largest:", b);
}
else {
    console.log("Largest:", c);
}

// Number prime hai ya nahi - Done

let num = 7;
let isPrime = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (num <= 1) {
    console.log("Not Prime");
}
else if (isPrime) {
    console.log("Prime");
}
else {
    console.log("Not Prime");
}

// Factorial nikaalo - Done

let num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
    fact = fact * i;
}

console.log("Factorial:", fact);

// Fibonacci series print karo - Done

let n = 10;

let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < n; i++) {
    let c = a + b;
    console.log(c);

    a = b;
    b = c;
}

// Reverse a number - Done

let num = 1234;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

console.log("Reverse:", reverse);

// Sum of digits  - Done

let num = 1234;
let sum = 0;

while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

console.log("Sum of digits:", sum);