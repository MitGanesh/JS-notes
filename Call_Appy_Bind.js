// Call, Apply and Bind in javascript (Explicit Binding)

// What is Call -> Call a function with attcaching other object properties
const obj = { name: "Sam" };

function sayMyName(age, profession, location) {
  return `Hello, my name is ${this.name} ${age} year old, I am a ${profession} lives in ${location}`;
}

console.log(sayMyName.call(obj, 27, "Software Engineer", "hyderabad"));

// What is Apply -> Same as call but the second argument must be an array of arguments

console.log(sayMyName.apply(obj, [27, "Software Engineer", "hyderabad"]));

// What is Bind -> It's bind the funtion with object and return a new reusable funtion if argument are not provided

const bindFunc = sayMyName.bind(obj);

console.log(bindFunc(24, "IGA Enginner", "Pune"));
console.log(bindFunc(22, "Student", "Mumbai"));

// Q-4 What is the output ?

const age = 10;

const person = {
  name: "Sam",
  age: 20,

  getAge: function () {
    return this.age;
  },
};

const person2 = { age: 24 };

console.log(person.getAge.call(person2));

// Call printAnimal such that it print all object in animals

const animals = [
  { spaies: "Lion", name: "King" },
  { spaies: "Whale", name: "Queen" },
];

const printAnimal = function (i) {
  this.print = function () {
    console.log(`# ${i} ${this.spaies} : ${this.name}`);
  };
  this.print();
};

animals.forEach((animal, index) => printAnimal.call(animal, index));

// Q-2 Append the array without using spread, for loop

const num = [1, 2, 3, 4];
const num2 = ["a", "b", "c"];

num.push.apply(num, num2);

console.log(num);

// Q-2 Find min max in an array

const nums = [1, 2, 3, 5, 6, 9];

console.log(Math.max.apply(null, nums));
console.log(Math.min.apply(null, nums));

// Q-3 What is the output ?

const f = function () {
  console.log(this); // => Points to window object
};

const user = {
  name: "Sam",

  g: f.bind(null),
};

user.g();

// Q-4 Bind chanig

function g(params) {
  console.log(this.name);
}

g = g.bind({ name: "John" }).bind({ name: "Sam" });

g();

// Q-5 Fix the below code to work properly

function checkPassword(sucess, fail) {
  const password = "123456";

  if (password === "123456") sucess();
  else fail();
}

const user1 = {
  name: "Ganesh M",
  loginSuccessful() {
    console.log(`${this.name} has logged in.`);
  },
  loginFailed() {
    console.log(`${this.name} failed to login.`);
  },
  login(result) {
    console.log(
      `${this.name} ${result ? "has logged in." : "failed to login."}`
    );
  },
};

checkPassword(user1.loginSuccessful.bind(user1), user1.loginFailed.bind(user1));

// Q-5 Partial Application

const loginSuccess = user1.login.bind(user1, true);
const loginFail = user1.login.bind(user1, false);

checkPassword(loginSuccess, loginFail);

// Call Apply and Bind will not aplly with arrow function It behave the same borrowing this from it's outer parent noral funtion

// Pollyfill for Call Applay Bind

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("It is not callable");
  }
  context.fn = this;
  context.fn(...args);
};

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("It is not callable");
  }
  if (!Array.isArray(args))
    throw new Error("CreateListFromArrayLike called on non object");
  context.fn = this;
  context.fn(...args);
};

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("can not be bound as it is not callable");
  }
  context.fn = this;

  return function (...newArgs) {
    context.fn(...args, ...newArgs);
  };
};

function sayName(age, profession) {
  console.log(`Hey, my name is ${this.name}. ${age}, ${profession}`);
}

sayName.myCall(user, 26, "Student");
sayName.myApply(user, [24, "Software Enginner"]);
