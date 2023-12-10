
// size if the array
let arrSize = 30;

// delay 
let delay = 300;

// refering elements
const newArr = document.getElementById("new-array");
const bars = document.getElementById("bars");
const sizeSlider = document.getElementById("sizeSlider");
const speedSlider = document.getElementById("speedSlider");


generateArr();

// generating new array
newArr.addEventListener("click", ()=>{
    deleteChild();

    generateArr();    
    
})

// generate a new array
function generateArr(){
    const arr = Array(arrSize);    

    for(let i=0; i<arrSize; i++)
    {

        arr[i] = Math.floor(Math.random()*100);
        
        const bar = document.createElement("li");
        bar.style.height = (arr[i]*5 + 10) + "px";
        bar.classList.add("bar");

        bars.append(bar);        
    }

}

// to delete previously existed children
function deleteChild(){
    bars.innerHTML = "";
}

// adjusting the size of the array
sizeSlider.addEventListener("change", (e)=>{

    arrSize = 30 + Math.floor(parseInt(e.target.value)/2);

    deleteChild();

    generateArr(); 
})

// adjusting the speed of the sorting
speedSlider.addEventListener("change", (e)=>{    
    delay = 400 - parseInt(e.target.value);
    console.log(delay);
})

// creating a delay between swappings to spot the sortings
function waitforMe(milliSec){
    return new Promise( resolve => {
        setTimeout( resolve, milliSec);
    })
}

// swap the bars
function swap(bar1, bar2){

    const temp = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = temp;

}

// disable sorting buttons

function disableSortBtns()
{
    document.getElementById("bubble").disabled = true;
    document.getElementById("selection").disabled = true;
    document.getElementById("insertion").disabled = true;
}

// enable sorting buttons

function enableSortBtns()
{
    document.getElementById("bubble").disabled = false;
    document.getElementById("selection").disabled = false;
    document.getElementById("insertion").disabled = false;
}

// disable size slider

function disableSizeSlider()
{
    document.querySelector("#sizeSlider").disabled = true;
}

// enable size slider

function enableSizeSlider()
{
    document.querySelector("#sizeSlider").disabled = false;
}

// disable new array
function disableNewArray()
{
    document.getElementById("new-array").disabled = true;
}

// enable new array
function enableNewArray()
{
    document.getElementById("new-array").disabled = false;
}

