// * ( Var, Let and Const ) - Hoisting, Scoping, Shadowing and more

/*
    * Variables - var, let and const

    1.Scope - A scope is a certain region in a program that defined variable is exists & recognized 
      beyond that is does not.
      
      - Globle scope
      - Block scope
      - Function scope
      
      * var is global / Funtion scope variable
      * let & const is block scope variable
      
    2.Variable shadowing - while shadowing a variable it shouldn't cross the boundary of scope
      That means shadow a var variable with let but can not do the opposite

    function test () {
        * Function Scope
        var a = 'Hello world';

        if(true) {
            * Block Scope
            Here let variable shadow the outer var variable 
            let a = 'Hello Universe';
            console.log(a); -> 'Hello Universe'
        }

        console.log(a); -> 'Hello world'
    }

    ! If we shadow a let variable with var then it will give an error and this called as illegal shadowing


    3.Declaration - 

    * we can declare a var variable as many times as we want 
    var a;
    var a;

    * But we can't declare a let & const variable once declared in same scope
    let a;
    let a;
    gives an error ->
    ! SyntaxError: Identifier 'a' has already been declared
    ! Cannot redeclare block-scoped variable 'a'
    
    4.Declaration without initialization

    * we can declare a var and let variable without initialization
    var a;
    let b;
    * But we can't declare a const variable without initialization
    const c = "value";  -> ACCEPT
    
    const c;            -> ERROR
    ! SyntaxError: Missing initializer in const declaration

    5.Re-initialization

    * we can re-initialization a var and let variable
    var a = 20;
    a = 30;

    * But we can't re-initialization a const variable again once initialized
    const c = "value";  -> ACCEPT
    
    c = "change";       -> ERROR
    ! TypeError: Assignment to constant variable.
*/

/*
    * Variable Hoisting

    ? JS Execution context


    When we try to execute the JS code there are two phases

      - Creation phase
      - Execution phase
      
    A. Creation phase: In creation phase three things happen
        1. It will create a global / window object
        2. It setups a memory heap for storing variables and funtion refrences
        2. Initialize those funtion and variables declaration with undefined

    B. Execution phase: In execution phase javascript execute code line by line by.

    ? Hoisting 

    During the creation phase the js engine will move the variables and function declaration to the top 
    of code and this is called as hoisting.

    console.log(a); -> undefined

    var a = 20;

    * let variable are also hoisted, but there in temporal dead zone
    Temporal dead zone is the time between the declaration and initialization of let and const variables
     
*/
