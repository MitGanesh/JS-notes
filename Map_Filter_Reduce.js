// Map, Filter and Reduce Methods

// Thsese are array methods to itrate over array elements to transform and computation result
// by passing an function which may or may not return an array

/*

    1. Map: -> Will return a new array 
    - It applies a provided function to each element of the array, 
    - and creates a new array with the results.

    Example: 
    var numbers = [1, 2, 3, 4, 5];
    var doubledNumbers = numbers.map(function(number) {
        return number * 2;
    });

    2. Filter: -> Will return a new array
    - It creates a new array with all elements that pass the test implemented by the provided function.
    Example:
    var numbers = [1, 2, 3, 4, 5];
    var evenNumbers = numbers.filter(function(number) {
        return number % 2 === 0;
    });

    3. Reduce: -> Will return a single value
    - It applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
    Example:
    var numbers = [1, 2, 3, 4, 5];
    var sum = numbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0); // initial value of accumulator is 0

    4. forEach: -> It executes a provided function once for each array element.
    Example:
    var numbers = [1, 2, 3, 4, 5];
    numbers.forEach(function(number) {
        console.log(number);
    });

    5. Sort: -> It sorts the elements of an array in place and returns the array.
    Example:
    var numbers = [1, 12, 21, 2, 3];
    numbers.sort(function(a, b) {
        return a - b;
    }); // [1, 2, 3, 12, 21]

    6. Every: -> It tests whether all elements in the array pass the test implemented by the provided function.
    Example:
    var numbers = [1, 2, 3, 4, 5];
    var allEven = numbers.every(function(number) {
        return number % 2 === 0;
    }); // false

    7. Some: -> It tests whether at least one element in the array passes the test implemented by the provided function.
    Example:
    var numbers = [1, 2, 3, 4, 5];
    var anyEven = numbers.some(function(number) {
        return number % 2 === 0;
    }); // true

    8. Includes: -> It determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    Example:
    var numbers = [1, 2, 3, 4, 5];
    var includesThree = numbers.includes(3); // true

    9. Find: -> It returns the value of the first element in the array that satisfies the provided testing function.
    Example:
    var numbers = [1, 2, 3, 4, 5];
    var firstEven = numbers.find(function(number) {
        return number % 2 === 0;
    }); // 2

    10. FindIndex: -> It returns the index of the first element in the array that satisfies the provided testing function.
    Example:
    var numbers = [1, 2, 3, 4, 5];
    var firstEvenIndex = numbers.findIndex(function(number) {
        return number % 2 === 0;
    }); // 1

    11. Flatten: -> It flattens an array a level down, collapsing multiple levels of arrays into a single array of values.
    Example:
    var arr = [1, 2, [3, 4], [5, [6, 7]]];
    var flattened = arr.flat(); // [1, 2, 3, 4, 5, 6, 7]

*/

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) result.push(this[i]);
  }

  return result;
};

const arr = [1, 2, 3, 4, 5, 6];

const ans = arr.myMap((ele, i) => {
  return ele * i;
});

console.log(ans);
