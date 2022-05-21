var headerbox = document.querySelector(".headerbox2");
var lastele = document.querySelector(".lastele");
var listcha = document.querySelectorAll(".listcha");
var ulist = document.querySelector(".ulist");
lastele.addEventListener("mouseover", ()=>{//when hover display block or none
    headerbox.classList.remove("d-none");
headerbox.classList.add("d-block")});
lastele.addEventListener("mouseout", ()=>{
    headerbox.classList.remove("d-block");
    headerbox.classList.add("d-none");
});
listcha.forEach((list) => {//when hover make border bottom to all list element 
    list.addEventListener("mouseover", ()=>{
        list.classList.add("border-bottom", "border-2", "border-secondary");
    })
});
listcha.forEach((list) => {
    list.addEventListener("mouseout", ()=>{
        list.classList.remove("border-bottom", "border-2", "border-secondary");
    })
});
ulist.style.boxShadow = "2px 2px 25px #777";
////////////////////////////////////////////////////////////change header bg color
// var headerboxx = document.getElementsByClassName("headerbox1")[0];//to convert from html collection to an element
var headerboxx = document.querySelector("body > section:nth-child(1) > div");//right click inspect element right click copy by selector
var changecolor = document.querySelector(".changecolor");
var hchange = document.querySelector("body > section:nth-child(1) > div > h2");
var hcolor = document.getElementById("hcolor");
var heco = (e)=>{
    headerboxx.classList.remove("bg-dark");
    changecolor.classList.remove("bg-success");
    hchange.classList.remove("bg-success");
// headerboxx.style.backgroundColor = "hsl(170, 20%, 55%)";
const colorvalue = `hsl(${Math.floor(Math.random()*360)}, ${Math.floor(Math.random()*100)}%, 55%)`;
headerboxx.style.backgroundColor = colorvalue;//change header bg color random
changecolor.style.backgroundColor = colorvalue;// take the same header random color
hchange.style.backgroundColor = `hsl(${Math.floor(Math.random()*360)}, ${Math.floor(Math.random()*100)}%, 55%)`;//take differ random color
};
hcolor.addEventListener("click", ()=>{
    heco();
});
///////////////////////////////////////////////////////////change title bg color
var titlecolor = document.querySelectorAll("h2:not(body > section:nth-child(1) > div > h2)");//all h2 element except the header first h2 element
var tibg =(e)=>{
    const colorvalue = `hsl(${Math.floor(Math.random()*360)}, ${Math.floor(Math.random()*100)}%, 55%)`;
    titlecolor.forEach((item)=>{
        item.classList.remove("bg-dark");
        item.style.backgroundColor = colorvalue;//each title take the same bg color
        // item.style.backgroundColor = `hsl(${Math.floor(Math.random()*360)}, ${Math.floor(Math.random()*100)}%, 55%)`;//each title has differ bg color
    })
};
titlebg.addEventListener("click", ()=>{
    tibg();
});
////////////////////////////////////////////////////////////////////////////////change title color
const colorval= ()=>{
    return Math.floor(Math.random()*360);
};//reusable function return random color
// var titlecolorch =document.getElementById("titlecolorch");
 var tico = (e)=>{
    titlecolor.forEach((item)=>{
        item.classList.remove("text-white", "text-light");
        item.style.color =`hsl(${ colorval()}, ${Math.floor(Math.random()*100)}%, 55%)`;//each title take differ bg color
    });
    };
    titlecolorch.addEventListener("click",()=>{
        tico();
    });
    /////////////////////////////////////////////////////////////////////change section color to differ colors
//     var sectionl = document.querySelectorAll("section:not(body > section:nth-child(1))");
//     const seccol =[ "bg-primary", "bg-info","bg-black-50", "bg-danger", "bg-warning", "bg-success"];//["#777", "#fafafa", "#ccc"];//, "red", 
//     let k =0;
//     sectioncolor.addEventListener("click", (e)=>{
//     sectionl.forEach((item)=>{
//         console.log(k);
//         // item.style.backgroundColor = seccol[k];
//         for(var i=0; i<seccol.length; i++){
//         item.classList.remove(seccol[i]);}
//         item.classList.add(seccol[k]);//differ section bg-color
//         console.log(sectionl);
//         (k<seccol.length-1)?k++:k=0;//if condition tenary(condition?if true:if false;)  
//     })
// })
////////////////////////////////////////////////////////another solution using the same color section
// var sectionl = document.querySelectorAll("section:not(body > section:nth-child(1))");
//     const seccol =[ "bg-primary", "bg-info","bg-black-50", "bg-danger", "bg-warning", "bg-success"];//["#777", "#fafafa", "#ccc"];//, "red", 
//     let k =0;
//     sectioncolor.addEventListener("click", (e)=>{
//     sectionl.forEach((item)=>{
//         console.log(k);
//         // item.style.backgroundColor = seccol[k];
//         for(var i=0; i<seccol.length; i++){
//         item.classList.remove(seccol[i]);}
//         item.classList.add(seccol[k]);//differ section bg-color
//         console.log(sectionl);      
//     })// same bg color section if we write if condition after forEach practises{}
//     if(k<(seccol.length-1)){
//         k++;
//     }
//     else{
//         k=0;
//     }
// })
///////////////////////////////////////////////////another solution using random bg color
// var sectionl = document.querySelectorAll("section:not(body > section:nth-child(1))");
// const seccol =[ "bg-primary", "bg-info", "bg-danger", "bg-warning", "bg-success"];//["#777", "#fafafa", "#ccc"];//, "red", 
// sectioncolor.addEventListener("click", (e)=>{
//         sectionl.forEach((item)=>{
//             // item.style.backgroundColor = seccol[k];
//             for(var i=0; i<seccol.length; i++){
//             item.classList.remove(seccol[i]);}
//             item.classList.add(seccol[Math.floor(Math.random()*seccol.length)]);//random bg-color to sections
//             // item.classList.add(seccol[Math.round(Math.random()*(seccol.length-1))]);//random bg-color to sections

//console.log(sectionl); 
//         })
//     })
//////////////////////////////////////////////////////////////////////////another solution the same section color
// var sectionl = document.querySelectorAll("section:not(body > section:nth-child(1))");
// const seccol =[ "bg-primary", "bg-info", "bg-danger", "bg-warning", "bg-success"];//["#777", "#fafafa", "#ccc"];//, "red", 
// sectioncolor.addEventListener("click", (e)=>{
    //var rand = seccol[Math.floor(Math.random()*seccol.length)];
//         sectionl.forEach((item)=>{
//             // item.style.backgroundColor = seccol[k];
//             for(var i=0; i<seccol.length; i++){
//             item.classList.remove(seccol[i]);}
//             item.classList.add(rand);//random bg-color the same color to sections to sections
//             // item.classList.add(seccol[Math.round(Math.random()*(seccol.length-1))]);//random bg-color to sections

//console.log(sectionl); 
//         })
//     })
//////////////////////////////////////////////////////////////////////////////change color using hex
// var sectionl = document.querySelectorAll("section:not(body > section:nth-child(1))");
// sectioncolor.addEventListener("click", (e)=>{
//     var rand = (Math.random()).toString(16).slice(2,8);//convert from number to string hex for get random bg-color the same to all sections
//         sectionl.forEach((item)=>{
//             item.style.backgroundColor= `#${rand}`;
//           console.log(sectionl); 
//         })
//     }) ;
    //////////////////////////////////////////////////////////////////////////////////another solution using function
    const ran = (e)=>{
        return  "#"+(Math.random()).toString(16).slice(2,8);//hex random color
    } ////////////reusable function to return random hex color
    var sectionl = document.querySelectorAll("section:not(body > section:nth-child(1))");
 var seco = (e)=>{
    var rand = ran();// we use avariable to make the bg-color the same to all sections 
    sectionl.forEach((item)=>{
        item.style.backgroundColor= rand;
      console.log(sectionl); 
    })
} ;
sectioncolor.addEventListener("click", ()=>{
    seco();
})
////////////////////////////////////////////////////////////////////////////change section color to random hex color
var mode = document.querySelector(".changecolor");
mode.addEventListener("click",()=>{
    document.body.style.backgroundColor= ran();
    seco();//change section color reusable function
    tico();//change title color reusable function
    tibg();//change title backgroundcolor reusable function
    heco();//change heading color reusable function
});
////////////////////////////////////////////////////change mode 
