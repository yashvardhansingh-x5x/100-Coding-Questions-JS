// Function to calculate factorial - Done
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Function returning function - Done
function outer() {
  return function inner() {
    console.log("Hello from inner function");
  };
}

const fn = outer();
fn();


// Closure based counter - Done
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const c = counter();
console.log(c()); // 1
console.log(c()); // 2

// Private variable using closure - Done
function person() {
  let name = "Yash";

  return {
    getName: function () {
      return name;
    },
    setName: function (newName) {
      name = newName;
    }
  };
}

const p = person();
console.log(p.getName());
p.setName("John");
console.log(p.getName());

// Once function implement karo - Done
function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn(...args);
      called = true;
    }
    return result;
  };
}

// Example
const init = once(() => {
  console.log("Initialized");
  return 42;
});

console.log(init());
console.log(init());

// Memoization example - Done


// Function currying  - Done


// Custom map() function


// Custom filter() function


// Custom reduce() function
