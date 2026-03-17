// map se square array - Done
let nums = [1,2,3,4,5];

let squares = nums.map(num => num * num);

console.log(squares); //[1,4,9,16,25]

// filter se even numbers - Done
let nums = [1,2,3,4,5,6];

let even = nums.filter(num => num % 2 === 0);

console.log(even); //[2,4,6]

// reduce se sum - Done
let nums = [1,2,3,4];

let sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum); //10

// reduce se max element - Done
let nums = [5,10,2,20,7];

let max = nums.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
});

console.log(max); //20

// Group objects by property - Done
let people = [
 {name:"A", age:20},
 {name:"B", age:25},
 {name:"C", age:20}
];

let grouped = people.reduce((acc, person) => {

 if(!acc[person.age]){
  acc[person.age] = []
 }

 acc[person.age].push(person)

 return acc

}, {})

console.log(grouped) //{
// 20: [{name:"A"}, {name:"C"}],
// 25: [{name:"B"}]
// }

// Sort numbers ascending - Done
let nums = [5,2,9,1,7];

nums.sort((a,b)=>a-b);

console.log(nums); //[1,2,5,7,9]

// Sort numbers descending- Done
let nums = [5,2,9,1,7];

nums.sort((a,b)=>b-a);

console.log(nums); //[9,7,5,2,1]

// Convert array to object - Done
let arr = ["apple","banana","mango"];

let obj = arr.reduce((acc,curr,index)=>{
 acc[index] = curr
 return acc
}, {})

console.log(obj) //{0:"apple",1:"banana",2:"mango"}

// Remove duplicates using Set - Done
let nums = [1,2,2,3,4,4,5];

let unique = [...new Set(nums)];

console.log(unique); //[1,2,3,4,5]

// Count frequency using reduce
let arr = ["a","b","a","c","b","a"];

let freq = arr.reduce((acc,curr)=>{
 acc[curr] = (acc[curr] || 0) + 1
 return acc
}, {})

console.log(freq) //{a:3, b:2, c:1}

