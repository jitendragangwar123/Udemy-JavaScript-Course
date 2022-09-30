# JS is Synchronous and single threaded language
# JS engine creates GEC which have memory space and the execution context, a global object(window) and a this variable
# this===window
/*
console.log(x);
var x=24;
console.log(x);
console.log(a);//Uncought ReferenceError : a is not defined
*/

# In var keyword we can override it's value.
# function scope
//var a=1;
//var a=2;

# let has block scope
//let a=2;
// let b;
// b=10;

# const has block scope
//const a =10;
// const b;
// b=10; // it's generates error
