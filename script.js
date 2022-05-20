
var randomHearts = document.getElementById("random-hearts");
var container = document.querySelector(".container");
randomHearts.addEventListener("click",function() {
    const parentHeart = document.createElement("div");
    container.append(parentHeart);
    const createRandomHearts = setInterval(function(){
    const heart1 = document.createElement("div");
    const heart2 = document.createElement("div");
    const heart3 = document.createElement("div");

    heart1.classList.add("heart", "text-danger", "fs-1");
    heart2.classList.add("heart", "text-primary", "fs-1");
    heart3.classList.add("heart", "text-warning", "fs-1");

    heart1.innerHTML ="&#128151";
    heart2.innerHTML ="&#128151";
    heart3.innerHTML ="&#128151";

    heart1.style.left = `${Math.random()*100}%`;
    heart2.style.left = `${Math.random()*100}%`;
    heart3.style.left = `${Math.random()*100}%`;

    heart1.style.animationDuration = `${(Math.random()+0.5)*1.5}s`;
    heart2.style.animationDuration = `${(Math.random()+0.5)*1.5}s`;
    heart3.style.animationDuration = `${(Math.random()+0.5)*1.5}s`;

    parentHeart.append(heart1);
    parentHeart.append(heart2);
    parentHeart.append(heart3);

}, 50);
setTimeout(function() {
    clearInterval(createRandomHearts);
}, 3000);
setTimeout(function(){
      parentHeart.remove(); 
}, 5000);
});
