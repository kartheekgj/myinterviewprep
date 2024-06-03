//Memoization
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, fn(...args));
    }
    return cache.get(key);
  };
}
//Debounce
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
//flatten
function flatten(arr) {
  const result = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result.push(...flatten(element));
    } else {
      result.push(data);
    }
  });
  return result;
}
//deepclone
function deepClone(value) {
  //return structuredClone(value);
  if (value == null || typeof value != "object") {
    return value;
  }
  const newObj = Array.isArray(value) ? [] : {};
  for (let key in value) {
    newObj[key] = deepClone(value[key]);
  }
  return newObj;
}
/*
ClosureSum(10,5)
ClosureSum(10)(5)
*/
function ClosureSum() {
  var total = 0;
  var args1 = Array.prototype.slice.call(arguments);
  args1.forEach(function (val) {
    total += val;
  });
  return function innerSum() {
    var args2 = Array.prototype.slice.call(arguments);
    args2.forEach(function (val) {
      total += val;
    });
    return total;
  };
  return total;
}
//remove duplicates
const nums = [1, 2, 3, 4, 1, 1, 2, 4];
const filteredArray = nums.filter((val, index) => nums.indexOf(val) === index);
//for count <=2
const filteredArray = nums.filter((val, index,arr) => {
  const count = arr.filter(item => item === val).length;
  return count <= 2;
});


// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Palindrome Check
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

// Factorial Calculation
function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}

// Fibonacci Sequence
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

// Find the Longest Word
function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

// Anagram Check
function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Sum of Array Elements
function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// Remove Duplicates from Array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Flatten Nested Array
function flattenArray(arr) {
    return arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? flattenArray(item) : item), []);
}

// Merge Two Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }
    }
    return [...merged, ...arr1.slice(i), ...arr2.slice(j)];
}


