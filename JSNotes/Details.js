let myName="Jitendra";
let myAge=24;
let myAddress="Bareilly";
function myDetails(){
    console.log(myName, myAge, myAddress);
} 
myDetails(); //Jitendra 24 Bareilly
myAge=26;
myDetails(); //Jitendra 26 Bareilly

//Passing Parameter 
let num=22;
function updateNum(incrementby,multiplyby){
    num=(num+incrementby)*multiplyby;
    return num;
}

let res=updateNum(2,1);
console.log(res); //24

//simple calculator

function add(num1,num2){
    return num1+num2;
}

function sub(num1,num2){
    return num2-num1;
}

function mul(num1,num2){
    return num1*num2;
}

function div(num1,num2){
    return num2/num1;
}

function funky(num1,num2,num3){
    return (num2*num3)+num1;
}
