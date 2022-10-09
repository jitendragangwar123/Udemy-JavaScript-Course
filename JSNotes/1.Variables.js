# JS is Synchronous and single threaded language
# JS engine creates GEC which have memory space and the execution context, a global object(window) and a this variable
# this===window

console.log(x);
var x=24;
console.log(x);
console.log(a);//Uncought ReferenceError : a is not defined


//Overriding possible
var a=2;
var a=3;
console.log(a);  //3


let b=2;
// let b=3 not possible
//reassigned the value with same variable
b=3;
console.log(b); //3

const c=3;
//c=4;
console.log(c);//3
