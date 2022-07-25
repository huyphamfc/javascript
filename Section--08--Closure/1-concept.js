/* 
step 1: "createCounter" is called
            + a new "createCounter's context" is put on top of the Call Stack
            + an execution context (EC) has a variable environment
step 2: "createCounter" returns a function to "counter"
step 3: "createCounter" pops off the Call Stack
step 4: "counter" is called
            + a "counter's context" is put on top of the Call Stack
            + "counter's EC" is empty            
            + "counter" continues to have access to "count" variable in "createCounter" function was created
            (any function always has access to the variable environment of the execution context in which
            the function was created) 
            => how "counter" will be able to read and manipulate "createCounter" ==> Closure
            + "createCounter" as being the birthplace of "increase" function
            + "increase" remembers everything at its birthplace by the time it was created

==> a closure makes a function remember all the variables that existed at the function's birthplace

+----------------------------------------------------------------------------------+
|       A closure is the closed-over variable environment of the execution context |
| in which a function was created, even after that execution context is gone.      |
|                                                                                  |
|       A closure gives function access to all the variables of its parent         |
| function, even after that parent function has returned. The function keeps a     |
| reference to its outer scope, which preserves the scope chain throughout time.   |
|                                                                                  |
|       A closure makes sure that a function doesn't lose connection to variables  |
| that existed at the function's birthplace.                                       |
|                                                                                  |
|       A closure is like a backpack that a function carries around wherever it    |
| goes. This backpack has all the variables that were present in the environment   |
| where the function was created.                                                  |
+----------------------------------------------------------------------------------+
*/


'use strict'


const createCounter = function () {
    let count = 0;

    const increase = function () {
        return ++count;
    }

    return increase;
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.dir(counter);

const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2