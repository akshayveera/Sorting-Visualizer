

async function insertionSort(){

    const allBars = Array.from(document.querySelectorAll(".bar"));

    

    for(let i=1; i<allBars.length; i++)
    {        
        const temp = allBars[i].style.height;

        allBars[i].style.backgroundColor = "blueviolet";
        await waitforMe(delay);

        let j = i-1;

        while(j>=0 && parseInt(allBars[j].style.height) > parseInt(temp))
        {
            allBars[j].style.backgroundColor = "#186cfe";  
            await waitforMe(delay);

            allBars[j+1].style.height = allBars[j].style.height;
            allBars[j].style.backgroundColor = "green";  

            j--;

        }

        allBars[j+1].style.height = temp;
        allBars[i-1].style.backgroundColor = "green";
    }

    allBars[allBars.length-1].style.backgroundColor = "green";

}

const insertion = document.getElementById("insertion");

insertion.addEventListener("click", async ()=>{

    disableSortBtns();
    disableSizeSlider();
    disableNewArray();

    await  insertionSort();

    enableSortBtns();
    enableSizeSlider();  
    enableNewArray();
    
})
