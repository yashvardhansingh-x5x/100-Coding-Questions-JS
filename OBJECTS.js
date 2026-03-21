// Object me key exist karti hai ya nahi - Done
let obj = { name: "Yash", age: 20 };

let key = "age";

if (obj.hasOwnProperty(key)) {
    console.log("Key exists");
} else {
    console.log("Key does not exist");
}

// Object ke keys print karo - Done
let obj = { name: "Yash", age: 20 };

let keys = Object.keys(obj);
console.log(keys);

// Object ke values print karo - Done
let obj = { name: "Yash", age: 20 };

let values = Object.values(obj);
console.log(values);

// Object ko array me convert karo - Done
let obj = { name: "Yash", age: 20 };

let arr = Object.entries(obj);
console.log(arr);

// Array ko object me convert karo - Done
let arr = [["name", "Yash"], ["age", 20]];

let obj = Object.fromEntries(arr);
console.log(obj);

// Merge two objects - Done
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let merged = { ...obj1, ...obj2 };

console.log(merged);

// Deep clone object - Done
let obj = { name: "Yash", address: { city: "Delhi" } };

let clone = JSON.parse(JSON.stringify(obj));

clone.address.city = "Noida";

console.log(obj);    // original safe
console.log(clone);  // changed

// Object ko sort karo by value - DOne
let obj = { a: 3, b: 1, c: 2 };

let sorted = Object.fromEntries(
    Object.entries(obj).sort((a, b) => a[1] - b[1])
);

console.log(sorted);

// Nested object se value nikaalo - DOne
let obj = {
    user: {
        profile: {
            name: "Yash"
        }
    }
};

console.log(obj.user.profile.name);

// Object me duplicate values find karo - Done
let obj = { a: 1, b: 2, c: 1, d: 3, e: 2 };

let values = Object.values(obj);
let duplicates = [];

for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
        if (values[i] === values[j] && !duplicates.includes(values[i])) {
            duplicates.push(values[i]);
        }
    }
}

console.log(duplicates);