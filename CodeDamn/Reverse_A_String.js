const str = "JavaScript is awesome"

function reverseAString(str) {
    // write your solution here
    let res=str.split("").reverse().join("");
    return res;
}

console.log(`Reversed string is: ${reverseAString(str)}`)
