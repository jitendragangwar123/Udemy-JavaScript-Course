//Variable Shadowing
let myAge=22;
function printMyAge(){
    let myAge=23; //variable shadowing
    console.log(myAge);
}
printMyAge(); //23

//Gives the priority to local varaible

let myAge=22;
let myAge=23;
function printMyAge(){
    console.log(myAge);
}
printMyAge(); //Error
