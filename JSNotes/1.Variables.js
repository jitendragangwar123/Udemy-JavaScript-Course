//JS is Synchronous and single threaded language
//JS engine creates GEC which have memory space and the execution context, a global object(window) and a this variable
//this===window

console.log(x);
var x=24;
console.log(x);
console.log(a); //Uncought ReferenceError : a is not defined


// var keyword
var a=2;
var a=3; ////Overriding possible in var keyword
console.log(a);  //3

// let keyword
let b=2;
//let b=3 not possible
b=3; //reassigned the value with same variable name in let keyword
console.log(b); //3

// const keyword
const c=3;
//c=4 not possible;
console.log(c);//3


//Assign the multiple variables in a single line
var firstName = "John",lastName = "Doe",age= 35;
