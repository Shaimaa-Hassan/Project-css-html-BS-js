var btnsel = document.querySelectorAll(".btnsel");
var d = document.createElement("p");
d.innerHTML = "3 Fun Facts About Denmark";
listbox.insertBefore(d, listunst);
d.classList.add("text-primary", "fw-bold", "fs-4");
btnsel.forEach((btn, index)=>{
    btn.addEventListener("click", (e)=>{
       var x = e.currentTarget.classList;
       console.log(x);
       if(x.contains("btn1")){
           btn.classList.add("btn-primary", "text-white");
           btn.classList.remove("btn-white", "text-secondary");
           btnsel[1].classList.remove("btn-primary", "text-white");
           btnsel[1].classList.add("btn-white", "text-secondary");
           btnsel[2].classList.remove("btn-primary", "text-white");
           btnsel[2].classList.add("btn-white", "text-secondary");
           d.innerHTML = "4 Fun Facts About Finland";
           listunst.innerHTML= `
           <li class="listbefo1 btnsel fw-bold">&nbsp; Finland is the world's happiest country</li>
           <li class="listbefo2 btnsel fw-bold">&nbsp; Finns are the world's biggest coffee drinkers</li>
           <li class="listbefo3 btnsel fw-bold">&nbsp; There are 187,888 lakes in Finland</li>
           <li class="listbefo4 btnsel fw-bold">&nbsp; Most Finnish children have two birthday parties</li>
           `;
       }
       else if (x.contains("btn2")){
        btnsel[index].classList.add("btn-primary", "text-white");
        btnsel[index].classList.remove("btn-white", "text-secondary");
        btn1.classList.remove("btn-primary", "text-white");
        btn1.classList.add("btn-white", "text-secondary");
        btn3.classList.remove("btn-primary", "text-white");
        btn3.classList.add("btn-white", "text-secondary");
        d.innerHTML = "3 Fun Facts About Denmark";
           listunst.innerHTML=`
           <li class="listbefo1 btnsel fw-bold">&nbsp; Denmark is the second happiest country in the world</li>
           <li class="listbefo2 btnsel fw-bold">&nbsp; Denmark has 444 islands</li>
           <li class="listbefo3 btnsel fw-bold">&nbsp; Denmark has The oldest flag in the world</li>
       `
       }
       else  if(x.contains("btn3")){
        btn.classList.add("btn-primary", "text-white");
        btn.classList.remove("btn-white", "text-secondary");
        btn1.classList.remove("btn-primary", "text-white");
        btn1.classList.add("btn-white", "text-secondary");
        btn2.classList.remove("btn-primary", "text-white");
        btn2.classList.add("btn-white", "text-secondary");
        d.innerHTML = "5 Fun Facts About Switzerland";
        listunst.innerHTML= `
        <li class="listbefo1 btnsel fw-bold">&nbsp; Switzerland is the third happiest country in the world</li>
        <li class="listbefo2 btnsel fw-bold">&nbsp; They Make & Eat a Lot of Chocolate</li>
        <li class="listbefo3 btnsel fw-bold">&nbsp; Switzerland Has 7000 Lakes</li>
        <li class="listbefo4 btnsel fw-bold">&nbsp; 25% of the Population Is Foreign</li>
        <li class="listbefo5 btnsel fw-bold">&nbsp; One of the Most Expensive Places to Live In</li>
        `;
    }
    });

});