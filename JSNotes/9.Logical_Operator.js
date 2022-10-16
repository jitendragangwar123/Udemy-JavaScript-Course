//Concatenation
"2"+1 //21
"2"+"1"//21
//Sub
"2"-1 //1
"2"-"1" //NaN
//Comparison Operator
"9"===9 //false
"9"==9 //true
3!==4 //true
3>=5 //false



function logicalOperator(age,bribe,whitelisted){
    if(!whitelisted){
        console.log("You are banned",whitelisted);
    }
    else{
        if((age>18 && bribe>500) || bribe >600){
            console.log("You are eligible");
        }
        else {
            console.log("You are not eligible");
        }
    }
}
// call the function
logicalOperator(19,600,false); //You are banned false
