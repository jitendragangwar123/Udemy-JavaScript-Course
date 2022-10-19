//Reverse the String
const str = "JavaScript is awesome"
function reverseAString(str) {
    // write your solution here
    let res=str.split("").reverse().join("");
    return res;
}
console.log(`Reversed string is: ${reverseAString(str)}`);

//Reverse the String in Js by using for loop
function reverseString(str){
    let newString="";
    for(let i=str.length-1;i>=0;i--){
        newString+=str[i];
    }
    return newString;
}
console.log(`Reverseed String is : ${reverseString("Jacob")}`); // bocaJ

//Reverse the String in Js by usnig reverse() method
function reverseStr(str1){
    return str1.split("").reverse().join("");
}
console.log(`Reverse String: ${reverseString("Jitendra")}`); // ardnetiJ

