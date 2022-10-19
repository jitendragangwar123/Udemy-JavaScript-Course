//Remove the Duplicates from the elements of an Array and convert it in a String 
let st = ['ab', 'cd', 'ed', 'ad','ef'];
let newString="";
    for(let i=0;i<st.length;i++){
        newString+=st[i];
    }
let uniqueChars = [...new Set(newString)];
let res=uniqueChars.join("");
console.log(res);// abcdef
