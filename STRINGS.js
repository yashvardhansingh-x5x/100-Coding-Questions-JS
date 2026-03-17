// String reverse karo - Done
let str = "hello";
let rev = str.split("").reverse().join("");
console.log(rev);

// Palindrome string check - Done
let str = "madam";
let isPalindrome = str === str.split("").reverse().join("");
console.log(isPalindrome);

// Count vowels  - Done
let str = "hello world";
let count = 0;

for(et char of str.toLowerCase()){
    if("aeiou".include(char)) count++;
    l
}

console.log(count);

// Count consonants - Done
let str = "hello world";
let count = 0;

for (let char of str.toLowerCase()) {
  if (char >= 'a' && char <= 'z' && !"aeiou".includes(char)) {
    count++;
  }
}

console.log(count);

// Count words  - Done
let str = "hello world javascript";
let words = str.trim().split(/\s+/);
console.log(words.length);

// First non-repeating character - Done
let str = "aabbcde";

for (let char of str) {
  if (str.indexOf(char) === str.lastIndexOf(char)) {
    console.log(char);
    break;
  }
}

// First repeating character - Done
let str = "abcade";

let seen = new Set();

for (let char of str) {
  if (seen.has(char)) {
    console.log(char);
    break;
  }
  seen.add(char);
}

// Capitalize first letter of each word - Done
let str = "hello world";

let result = str
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(result);

// Longest word find karo - Done
let str = "I love javascript programming";

let words = str.split(" ");
let longest = "";

for (let word of words) {
  if (word.length > longest.length) {
    longest = word;
  }
}

console.log(longest);

// Character frequency - Done
let str = "aabbcc";

let freq = {};

for (let char of str) {
  freq[char] = (freq[char] || 0) + 1;
}

console.log(freq);

// Remove spaces from string - Done
let str = "aabbcc";

let freq = {};

for (let char of str) {
  freq[char] = (freq[char] || 0) + 1;
}

console.log(freq);

// Check anagram - Done
let str1 = "listen";
let str2 = "silent";

let isAnagram =
  str1.split("").sort().join("") ===
  str2.split("").sort().join("");

console.log(isAnagram);

// Optimized Palindrome (No reverse) - Bonus
let str = "madam";
let left = 0, right = str.length - 1;
let isPalindrome = true;

while (left < right) {
  if (str[left] !== str[right]) {
    isPalindrome = false;
    break;
  }
  left++;
  right--;
}

console.log(isPalindrome);