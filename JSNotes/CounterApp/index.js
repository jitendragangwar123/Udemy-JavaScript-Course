const incrementBtn=document.querySelector("#incrementcounter");
const decrementBtn=document.querySelector("#decrementcounter");
const counterEl=document.getElementById("counter");

let counter=0;
function incrementCounter(){
    counter++;
    counterEl.innerText=counter;
}

function decrementCounter(){
    counter--;
    counterEl.innerText=counter;
}

incrementBtn.addEventListener('click',incrementCounter);
decrementBtn.addEventListener('click',decrementCounter);

