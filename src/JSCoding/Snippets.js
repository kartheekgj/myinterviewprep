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
ClosureSum(10,5.8,9,15,69,12)
ClosureSum(10)(5)
ClosureSum(2)(3,7,9,12,17)
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

console.log(ClosureSum(10)(2, 3, 4, 5));
