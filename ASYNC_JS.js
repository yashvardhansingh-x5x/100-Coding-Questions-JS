// Callback example - DOne
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Yash", sayBye);

// Callback hell example - Done
setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");

      setTimeout(() => {
        console.log("Step 4");
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);

// Promise create karo - DOne
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

myPromise
  .then(res => console.log(res))
  .catch(err => console.log(err));

// Promise chaining - Done
function step1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 1");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 2");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 3");
      resolve();
    }, 1000);
  });
}

step1()
  .then(step2)
  .then(step3)
  .then(() => console.log("All Done"));

// async/await example - Done
function delay(msg) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(msg);
    }, 1000);
  });
}

async function run() {
  let res1 = await delay("Step 1");
  console.log(res1);

  let res2 = await delay("Step 2");
  console.log(res2);

  let res3 = await delay("Step 3");
  console.log(res3);

  console.log("All Done");
}

run();