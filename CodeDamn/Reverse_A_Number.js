const num = 3849;
function reverseGivenInteger(num) {
    // write your solution here
    let res=parseFloat(num.toString().split('').reverse().join('')*Math.sign(num));
      //return String(num).split('').reverse().join('');
  return res;
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)
