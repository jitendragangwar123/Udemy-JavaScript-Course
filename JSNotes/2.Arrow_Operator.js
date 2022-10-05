//Arrow Operator
const myFun=()=>doSomeThing();
//pass the params
const myFun =(p1,p2)=>doSomeThing(p1,p2);
//pass the single param
const myFun =p1=>doSomeThing(p1);
//returning the value without using return keyword but it works only for single line statement
const myFun =()=>'test';
console.log(myFun());
//returning the  object value  
const myFun =()=>({value:'test'});
console.log(myFun());

//this keyword is not working with arrow operator because the value locked up into call stack so it's return undefined
const car = {
   model: 'Fiesta',
   manufacturer: 'Ford',
   fullName: () => {
     return `${this.manufacturer} ${this.model}`
  }
}
 console.log(car.fullName());
//output => undefined undefined

//it will work fine with regular function()
const car = {
  model: 'Fiesta',
  manufacturer: 'Ford',
  fullName: function() {
    return `${this.manufacturer} ${this.model}`
  }
}
console.log(car.fullName());
//output => Ford Fiesta

//this also not working with hadling the events.
const link = document.querySelector('#link')
link.addEventListener('click', () => {
  // this === window
})

//working fine with regular function
const link = document.querySelector('#link')
link.addEventListener('click', function() {
  // this === link
})
