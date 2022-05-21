const arr = [
    `<img class="d.block img-fluid position-absolute" src="pictures/1.png" alt="pic1">`,
        `<img class="d.block img-fluid position-absolute" src="pictures/2.png" alt="pic2">`,
        `<img class="d.block img-fluid position-absolute" src="pictures/3.png" alt="pic3">`,
        `<img class="d.block img-fluid position-absolute" src="pictures/4.png" alt="pic4">`,
        `<img class="d.block img-fluid position-absolute" src="pictures/5.png" alt="pic5">`
];
let i=0;
sliderContainer.innerHTML += arr[i];
pre.setAttribute("disabled","");
sliderContainer.innerHTML += `<p class="dpn position-absolute mt-3 ms-3 p-1 bg-info text-white fs-5">slider#${i+1} of ${arr.length} slids</p>`


next.addEventListener("click", (e)=>{
    pre.removeAttribute("disabled");
i++;

sliderContainer.innerHTML += arr[i];
sliderContainer.innerHTML += `<p class="dpn position-absolute mt-3 ms-3 p-1 bg-info text-white fs-5">slider#${i+1} of ${arr.length} slids</p>`
if(i == arr.length-1){
    next.setAttribute("disabled", "");
}
parentnumber.getElementsByClassName("btn-primary")[0].classList.remove("text-white", "btn-primary");
parentnumber.getElementsByTagName("button")[i].classList.add("text-white", "btn-primary");
});

pre.addEventListener("click", ()=>{
    next.removeAttribute("disabled");
    i--;
    sliderContainer.innerHTML += arr[i];
    sliderContainer.innerHTML += `<p class="dpn position-absolute mt-3 ms-3 p-1 bg-info text-white fs-5">slider#${i+1} of ${arr.length} slids</p>`
    if(i == 0){
        pre.setAttribute("disabled", "");
    }
    parentnumber.getElementsByClassName("btn-primary")[0].classList.remove("text-white", "btn-primary");
    parentnumber.getElementsByTagName("button")[i].classList.add("text-white", "btn-primary");
});
const allnaviu = document.querySelectorAll(".naviu");//all numbered buttons
const parentnumber = document.getElementsByClassName("number")[0];//the parent div of all numbered buttons
allnaviu.forEach((item, index)=>{//for that takes each numbered button and it's index in array
    item.addEventListener("click", (e)=>{//each numbered button should listen to click to do this function
        // console.log(index);
        parentnumber.getElementsByClassName("btn-primary")[0].classList.remove("text-white", "btn-primary");//remove this two classes from each element which included this class name and has this parent name and 
        item.classList.add("text-white", "btn-primary");//add to clicked numbered button this two classes 
        sliderContainer.innerHTML += arr[index];//add images which the index of array equal to the index to the numbered button
        sliderContainer.innerHTML += `<p class="position-absolute mt-3 ms-3 p-1 bg-info text-white fs-5">slider#${index+1} of ${arr.length} slids</p>`//add slide number and text
        
        i=index;

        if(index == arr.length-1){
            next.setAttribute("disabled", "");
            pre.removeAttribute("disabled");
        }
        else if(index == 0){
            pre.setAttribute("disabled", "");
            next.removeAttribute("disabled");

        }
        else{
            pre.removeAttribute("disabled");
            next.removeAttribute("disabled");

        }
     
    })
})
