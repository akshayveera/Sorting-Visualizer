
async function bubbleSort(){

    allBars = Array.from(document.querySelectorAll(".bar"));
    console.log(allBars);

    for(let i=0; i<allBars.length-1; i++)
    {

        for(let j=0; j<allBars.length-i-1; j++)
        {
            const bar1 = allBars[j];
            const bar2 = allBars[j+1];

            bar1.style.backgroundColor = "#186cfe";
            bar2.style.backgroundColor = "#186cfe"; 
            // console.log(bar1.style.color);

            await waitforMe(delay);
            
            if(parseInt(bar1.style.height) > parseInt(bar2.style.height))
            {
                swap(bar1, bar2);
            }

            await waitforMe(delay);

            bar1.style.backgroundColor = "cyan";
            bar2.style.backgroundColor = "cyan";
        }    
        
        allBars[allBars.length - 1 - i].style.backgroundColor = "green";
    }

    allBars[0].style.backgroundColor = "green";

}

const bubble = document.getElementById("bubble");

bubble.addEventListener("click", async ()=>{

    disableSortBtns();
    disableSizeSlider();
    disableNewArray();

    await  bubbleSort();

    enableSortBtns();
    enableSizeSlider();
    enableNewArray();   
})