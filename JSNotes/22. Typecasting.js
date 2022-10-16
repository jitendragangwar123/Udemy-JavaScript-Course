//int to string conversion 
let val =1;
val=1+"";
console.log(val);// 1
console.log(typeof val);//string 

//string to int conversion 
const string="15";
const str1 =+string;
const str2=Number(string);
const str3=parseInt(string);
console.log(string); //15
console.log(typeof str1); //number
console.log(typeof str2); //number
console.log(typeof str3); //number

//Convert string to array
const str="Jacob";
const newArr1=str.split("");
const newArr2=[...str];
const newArr3=Array.from(str);

console.log(newArr1); //[ 'J', 'a', 'c', 'o', 'b' ]
console.log(newArr2); //[ 'J', 'a', 'c', 'o', 'b' ]
console.log(newArr3); //[ 'J', 'a', 'c', 'o', 'b' ]

//prompt and alert 
var x=prompt("Enter x :"); // 4(prompt takes input as a string) 
var y=prompt("Enter y: "); //5 
var z=x+y;
alert(z); // '45' (string)

//Use typecasting
var x=Number(prompt("Enter x :")); //convert the string into number
var y=Number(prompt("Enter y: "));
var z=x+y; //z=4+5
alert(z); //9 (Number)
