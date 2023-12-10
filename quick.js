
let counter = 0;

async function quickSort(allBars, lo, hi)
{
    if(lo<hi)
    {
        // console.log("quick sort")
        console.log("counter : " + counter++);
      const mid = partition(allBars, lo, hi);
      
      quickSort(allBars, lo, mid-1);
      quickSort(allBars, mid+1, hi);
    }
}

async function partition(allBars, lo, hi)
{
    // console.log("partition");

    const pivot = parseInt(allBars[lo].style.height);

    console.log("pivot : "+ pivot);

    let i = lo+1;
    let j = hi;
  
    while(i<j)
    {
  
      while(i<=hi && parseInt(allBars[i].style.height) < pivot)
      {
        i++;
      }
  
      while(j>lo && parseInt(allBars[j].style.height) > pivot)
      {
        j--;
      }
  
      // console.log(i + " " + j);
  
      // console.log(arr[i] + " " + arr[j]);
      
      if(i<j)
      {
        console.log("true");
        const temp = allBars[j].style.height;
        console.log(temp);
        allBars[j].style.height = allBars[i].style.height;
        allBars[i].style.height = temp;
      }
  
      // console.log(arr[i] + " " + arr[j]);
  
    }
  
    allBars[lo].style.height = allBars[j].style.height;
    allBars[j].style.height = pivot + "px";

    allBars.map((ele) => console.log(ele.style.height));
    
    console.log("j : " + j);
    return j;
}

const quick = document.getElementById("quick");

quick.addEventListener("click", ()=>{

    const allBars = Array.from(document.querySelectorAll(".bar"));
    console.log(allBars);

    let str = "";

    allBars.map((bar)=>{
        str = str + parseInt(bar.style.height) + ", "
    });

    console.log(str);

    // quickSort(allBars, 0, allBars.length-1);
})