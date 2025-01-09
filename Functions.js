// Functions in javascript

/*
    1. What is function declaration: 
    - A function declaration is a statement that defines a function.

    function foo() {
        console.log('foo');
    }

    2. What is function expression: 
    - A function expression is a declaration of a function that is assigned to a variable.

    let bar = function() {
        console.log('bar');
    }

    3. What is first class function 
    - A function is a first-class citizen in JavaScript. 
    This means it can be assigned to a variable, passed as an argument to other functions, 
    and returned from other functions.

    4. What is IIFE
    - Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined.

    (function() {
        console.log('IIFE');
    })();

    5. What is clouser 
    - A closure is a function that has access to its outer function's variables, 
    even after the outer function has finished executing.

    Example 
    function outerFunction() {
        let outerVariable = 'Hello';
        
        function innerFunction() {
            console.log(outerVariable);
        }
        innerFunction();
    }
    outerFunction(); // Output: Hello


    6. What is Scope
    - Scope refers to the visibility and accessibility of variables, 
    functions, and objects in a specific part of your code.
    - JavaScript has two types of scope: global scope and local scope.
    - Global scope: variables and functions defined outside of any function are accessible anywhere in your code.
    - Local scope: variables and functions defined inside a function are accessible only within that function.

    7. What is Hoisting
    - Hoisting is a JavaScript behavior where variables and function declarations are moved to the top of their scope before code execution.
    - This means that you can call a function before it is defined, and declare a function before it is called.

    8. Pamars vs Arguments
    - Parameters: are the names listed in the function declaration that represent the input to the function.
    - Arguments: are the actual values passed to the function when it is called.

    9. What is Rest Parameter
    - The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
    - It is denoted by three dots (...).
    - Rest parameter is a feature introduced in ES6.
    
*/
