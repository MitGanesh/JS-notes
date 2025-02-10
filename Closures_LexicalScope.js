// Closures and Lexical Scoping

/*

    1. What is lexical scoping ?
    - Lexical scope means that a variable defined outside function can be accessible inside another function
    after a variable declaration

    2. What is closuers in javascript ?
    - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
    In other words, a closure gives a function access to its outer scope. 
    In JavaScript, closures are created every time a function is created, at function creation time.
    
    Example:

    function init() {
      var name = "Mozilla"; // name is a local variable created by init
      function displayName() {
        // displayName() is the inner function, that forms a closure
        console.log(name); // use variable declared in the parent function
      }
      displayName();
    }
    init();
    
*/

// Question 1 - What will be logged on the console
var a = 20;

(function name() {
  if (a === 20) {
    let a = 30;
    console.log(a); // Output - 30
  }
  console.log(a); // Output - 20
})();

// Question 2 - Write a function that will allow you to do this
/*
  const addSix = createBase(6);

  addSix(10); // Output -> 16
  addSix(6); // Output -> 12
*/
const createBase = (baseValue) => (num) => baseValue + num;

const addSeven = createBase(7);

// console.log(addSeven(10));

// Question 3 - Time optimization

const find = () => {
  const a = [];

  for (let i = 0; i < 10000; i++) {
    a[i] = i * i;
  }

  return (index) => {
    console.log(a[index]);
  };
};

const optimizedFind = find();

// console.time("6");
// optimizedFind(6);
// console.timeEnd("6");
// console.time("500");
// optimizedFind(500);
// console.timeEnd("500");

// Question 4 - setTimeout

const timeOutWithSameOutput = () => {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
};

const timeOutWithDiffOutput = () => {
  for (var i = 0; i < 3; i++) {
    ((num) => {
      setTimeout(() => {
        console.log(num);
      }, 1000 * i);
    })(i);
  }
};

// timeOut();

// Question 5 Make function that only run once

const baseFunc = () => {
  let functionExecuted = false;

  const innerFunc = () => {
    if (functionExecuted) {
      return "Function executed";
    } else {
      // Main function logic
      functionExecuted = true;
      return "Inner function executed";
    }
  };

  return innerFunc;
};

const runOnceFunc = baseFunc();

console.log(runOnceFunc());
console.log(runOnceFunc());
console.log(runOnceFunc());

// Question 5 Write a memozie Function

const clumsySum = (num1, num2) => {
  for (let index = 0; index < 10000; index++) {}
  return num1 * num2;
};

const memoisedSum = () => {
  const result = {};
  return function (num1, num2) {
    if (result[`${num1}:${num2}`]) {
      return result[`${num1}:${num2}`];
    } else {
      for (let index = 0; index < 10000; index++) {}
      const ans = num1 * num2;
      result[`${num1}:${num2}`] = ans;
      return ans;
    }
  };
};

const sum = memoisedSum();

console.log(clumsySum(56, 86));
console.log(clumsySum(56, 86));
console.log(sum(56, 86));
console.log(sum(56, 86));

console.log("0" == 0);
console.log(0 == []);
console.log("0" == []);

// Q- Create a counter using closures.

const counterFun = () => {
  let _count = 0;

  const incrementCount = () => ++_count;
  const decrementCount = () => --_count;
  return {
    incrementCount,
    decrementCount,
  };
};

const counter = counterFun();

console.log(counter.incrementCount());
