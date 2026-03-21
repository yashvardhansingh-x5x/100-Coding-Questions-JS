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
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// Function currying  - Done
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

// Example
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6

// Custom map() function
function customMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}

// Custom filter() function
function customFilter(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}

// Custom reduce() function
function customReduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (initialValue === undefined) {
    accumulator = arr[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
}