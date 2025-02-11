// this keyword

// When it comes to object there are two types of object binding
/*
    1. Implicit binding
    - Implicit binding is applied when we invoke a function with dot (.) notation

    2. Explicit binding
    - Expliict binding is applied with call, apply & bind methods of Object


    Q. What is this in javascript
    - this refers to the object currently executing the code by it's function, and the value of this depends on which function is being executing
*/

const obj = {
  name: "Sam",
  age: 24,

  childObj: {
    newName: "Child obj",
    // Here in 'this' keyword in noramal funtion referes to it's imediate parent object
    getChildObjName: function () {
      return `${this.newName} ${this.name}`; // Not it's parents parent object
    },
  },

  getObj() {
    // Just retuen the reference of the object -> Shallow copy
    return this;
  },

  getName() {
    return this.name;
  },

  // Arrow function 'this' -> refers to it's outer noraml function
  getAge: () => {
    return this.age;
  },
};

console.log(obj.getName());
console.log(obj.getAge());
console.log(obj.getObj());

console.log(obj.childObj.getChildObjName());

/*
    'this' keyword inside a class
*/

class car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // In class this refers -> to variables defined in constructor
  getCarDetails() {
    return `${this.make} - ${this.model}`;
  }
}

const newCar = new car("honda", "civic");

console.log(newCar.make);
console.log(newCar.getCarDetails());

// OUTPUT based question

// 1. What is the output ?
const user = {
  firstName: "Ganesh",

  getDetails() {
    let firstName = "Sam";

    return this.firstName;
  },
};

console.log(user.getDetails());

// 2. What is the result of accessing the ref ?
function makeUser() {
  return {
    name: "john",
    ref: this,
  };
}

const newUser = makeUser();

console.log(newUser.ref.name);

// 3. Implement this code

const cal = {
  total: 0,
  add(num) {
    this.total += num;
    return this;
  },
  multiply(num) {
    this.total *= num;
    return this;
  },
  substract(num) {
    this.total -= num;
    return this;
  },
};

const result = cal.add(10).multiply(3).substract(15).add(20);
console.log(cal.total);
