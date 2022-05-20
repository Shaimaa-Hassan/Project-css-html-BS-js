var allplus = document.querySelectorAll("#plus");
allplus.forEach(function(plus){
plus.addEventListener("click", function(e){
    var content = e.currentTarget.parentElement.parentElement.getElementsByClassName("content")[0];
   content.classList.toggle("active");
   if(content.classList.contains("active")){
    content.style.height= "fit-content";
   }
   else{
       content.style.height= "0";
   }
   plus.classList.toggle("hide-plus");
   if (plus.classList.contains("hide-plus")){
    plus.innerHTML= "-";
    plus.style.transform ="translateY(-5px)";
   }
   else {
    plus.innerHTML= "+";
    plus.style.transform ="translateY(0)";
   }
  
})
})