// Array ka max element - Done
function maxElement(arr){
    return Math.max(...arr)
}

// Array ka min element - Done
function maxElement(arr){
    return Math.min(...arr)
}

// Sum of array elements - Done
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Average of array - Done
function Average(arr) {
    retun sunArray(arr) / arr.length;
}

// Remove duplicates - Done
function removeDuplicates(arr){
    retun[...new Set(arr)];
}

// Second largest element - Done
function secondLargest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}

// Array reverse - Done
function reverseArray(arr){
    return arr.reverse();
}

// Array rotate left - Done
function rotateLeft(arr, k) {
  k = k % arr.length;

  return arr.slice(k).concat(arr.slice(0, k));
}

console.log(rotateLeft([1,2,3,4,5], 2));

// Array flatten
function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray([1, [2, [3, 4]], 5]));

// Frequency count
function frequencyCount(arr) {
  let freq = {};

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  return freq;
}

console.log(frequencyCount([1,2,2,3,3,3]));

// Check array sorted hai ya nahi
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1,2,3]));

// Merge two arrays - Done
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

// Intersection of arrays
function intersection(arr1, arr2) {
  let result = [];

  for (let val of arr1) {
    if (arr2.includes(val)) {
      result.push(val);
    }
  }

  return result;
}

console.log(intersection([1,2,3], [2,3,4]));

// Difference of arrays
function difference(arr1, arr2) {
  let result = [];

  for (let val of arr1) {
    if (!arr2.includes(val)) {
      result.push(val);
    }
  }

  return result;
}

console.log(difference([1,2,3], [2,3,4]));

// Remove falsy values
function removeFalsy(arr) {
  let result = [];

  for (let val of arr) {
    if (val) {
      result.push(val);
    }
  }

  return result;
}

console.log(removeFalsy([0,1,false,2,"",3]));

// Chunk array
function chunkArray(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}

console.log(chunkArray([1,2,3,4,5], 2));

// Find missing number
function findMissing(arr, n) {
  let expected = (n * (n + 1)) / 2;
  let actual = arr.reduce((sum, num) => sum + num, 0);
  return expected - actual;
}

// Count even & odd elements
function countEvenOdd(arr) {
  let even = 0, odd = 0;
  for (let num of arr) {
    num % 2 === 0 ? even++ : odd++;
  }
  return { even, odd };
}

// Move all zeros to end
function moveZeros(arr) {
  let nonZero = arr.filter(n => n !== 0);
  let zeros = arr.filter(n => n === 0);
  return [...nonZero, ...zeros];
}