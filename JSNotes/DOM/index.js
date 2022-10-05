//document is an Object. It have properties,functions etc.
const listAllItem=document.querySelectorAll('ul li')
for(let i=0;i<listAllItem.length;i++){
    const item=listAllItem[i];
    item.innerText="Hiii Jacob";
}
console.log(listAllItem);

//Using id name
const heading=document.querySelector("#name");
heading.innerText="Hii Jeetu";
console.log(heading);

//Using class name 
// const heading=document.querySelector(".name");
// heading.innerText="Hii Jeetu";
// console.log(heading);

//Using html tag 
// const heading=document.querySelector("h1");
// heading.innerText="Hii Jeetu";
// console.log(heading);


