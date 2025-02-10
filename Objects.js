// Object in javscript

const user = {
  name: "Ganesh M",
  age: 26,
  "key with space": true,
};

console.log(user.name);

// We can also change the value for any key in object
user.name = "Griffth";

// Accesing object keys
console.log(user.name);
console.log(user.age);
console.log(user["key with space"]);

console.log(user.age);

// For deleting any keys from objects
delete user.age;

// Adding dynamic key in objects
const key = "address";
user[key] = "Soalpur, Maharashtra. 413006";

// Ittrate over object
for (let key in user) {
  console.log(key);
}

console.log(user);

// Q-1 What will the output for below code
const res = (function (a) {
  // delete key only removes key from object not with variable
  delete a;
  return a;
})(5);

console.log(res);

// Q-2 What will the output for below code

const obj = {
  a: "one",
  b: "two",
  a: "three", // adding the same key will update the previous value
};

console.log(obj);

// Q-3 Create a function multiplyByTwo(obj) that multiplies only numeric value of object

const test = {
  a: 100,
  b: 200,
  name: "TEST OBJ",
};

function multiplyByTwo(obj) {
  for (let key in obj) {
    const value = obj[key];
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
multiplyByTwo(test);
console.log(test);

// when a object is added as key in another object it's converted to string as '[object Object]' as key
obj[test] = 456;
obj[test] = 123;
console.log(obj);

// Q-4 What is oulput for below line

console.log([..."Gaming"]);

// Q-5 What is the out for below code

const shape = {
  radius: 10,
  diameter() {
    return 2 * this.radius;
  },
  perimeter: () => Math.PI * 2 * this.radius,
  //   perimeter: function () {
  //     return (() => Math.PI * 2 * this.radius)();
  //   },
};

console.log(shape.diameter());
console.log(shape.perimeter());

// Q-6 Object refrencing

let c = { gretting: "Hello!" };

let d;
d = c;

d.gretting = "Hey it's D";

console.log(c.gretting); // -> 'Hey it's D'

// Q-7 What is the output

console.log({ a: 1 } == { a: 1 });
console.log({ a: 1 } === { a: 1 });

let aObj = { a: 2 };
console.log(aObj == aObj);
console.log(aObj === aObj);

// Q-8 What is the output

let person = { name: "ladiya" };
let members = [person];
person = null;

console.log(members);

// What is Shallow copy and deep copy ?
