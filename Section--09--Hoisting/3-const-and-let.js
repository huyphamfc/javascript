'use strict'


/*
"const" and "let" are hoisted but not initialized with a default value (undefined)
"const" and "let" are in Temporal Dead Zone (TDZ)
*/
{
    console.log(nickName); // ReferenceError: Cannot access 'nickName' before initialization
    const nickName = 'JS';
}


/*
"const" and "let" are hoisted in order for the JS engine to know in its scope that has these variables, and does not need to refer to its outer scope
*/
{
    let age = 1;
    {
        console.log(age); // ReferenceError: Cannot access 'age' before initialization
        let age = 0;
    }
}