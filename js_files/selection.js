
async function selectionSort(){

    const allBars = Array.from(document.querySelectorAll(".bar"));

    
    let maxIdx = 0;

    for(let i=0; i<allBars.length; i++)
    {
        allBars[allBars.length - 1 - i].style.backgroundColor = "#186cfe";

        for(let j=0; j<allBars.length-i; j++)
        {
            allBars[j].style.backgroundColor = "#f1246f";
            allBars[maxIdx].style.backgroundColor = "blueviolet";

            await waitforMe(delay);

            if(parseInt(allBars[j].style.height) > parseInt(allBars[maxIdx].style.height))
            {
                allBars[maxIdx].style.backgroundColor = "cyan";
                maxIdx = j;
            }

            allBars[j].style.backgroundColor = "cyan";
        }

        allBars[maxIdx].style.backgroundColor = "blueviolet";
        allBars[allBars.length - 1 - i].style.backgroundColor = "blueviolet";

        await waitforMe(delay*2);

        swap(allBars[maxIdx], allBars[allBars.length - 1 - i]);  
        allBars[maxIdx].style.backgroundColor = "cyan";      
        allBars[allBars.length - 1 - i].style.backgroundColor = "green";
        maxIdx = 0;
    }

}

const selection = document.getElementById("selection");

selection.addEventListener("click", async ()=>{

    disableSortBtns();
    disableSizeSlider();
    disableNewArray();

    await  selectionSort();

    enableSortBtns();
    enableSizeSlider();   
    enableNewArray();
})