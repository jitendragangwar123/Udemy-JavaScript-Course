const incrementBtn=document.querySelector("#incrementcounter");
const decrementBtn=document.querySelector("#decrementcounter");
const counterEl=document.getElementById("counter");
const listEl=document.getElementById("list-items");

let counter=0;
//Increment the counter
function incrementCounter(){
    counter++;
    counterEl.innerText=counter;
    //Create an element
    let li=document.createElement("li");
    //Set the attribute
    li.setAttribute('data-counter',counter);

    //add style attribute 
    if(counter%2===0){
        li.style.color="red"
    }
    else{
        li.style.color="blue";
    }
    li.innerHTML="<b>Hello GFG</b>" +counter;
    
    //Append the element
    listEl.appendChild(li);
}
//Decrement the counter
function decrementCounter(){

    //Remove the element
    const li=listEl.querySelector('[data-counter="'+counter+'"]');
    const num=parseInt(li.getAttribute('data-counter'),10);
    if(num%2===0){
        li.remove();
    }
    counter--;
    counterEl.innerText=counter;
}

incrementBtn.addEventListener('click',incrementCounter);
decrementBtn.addEventListener('click',decrementCounter);

