var movieParent =document.querySelector(".movieParent");
var arrvedio =[
    `<iframe id="movie" class="border rounded border-secondary border-2" width="640" height="380" src="https://www.youtube.com/embed/dNVZ0ZPfE8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="movie" class="border rounded border-secondary border-2" width="640" height="380" src="https://www.youtube.com/embed/Cbk980jV7Ao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="movie" class="border rounded border-secondary border-2" width="640" height="380" src="https://www.youtube.com/embed/xvV7OI1jdu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="movie" class="border rounded border-secondary border-2" width="640" height="380" src="https://www.youtube.com/embed/e6N_LlNQQ5Y?list=RDCMUC-qSbRLINXvZBZM6CpUMDzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="movie" class="border rounded border-secondary border-2" width="640" height="380" src="https://www.youtube.com/embed/s6dMWzZKjTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="movie" class="border rounded border-secondary border-2" width="640" height="380" src="https://www.youtube.com/embed/jA14r2ujQ7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="movie" class="border rounded border-secondary border-2" width="640" height="380" src="https://www.youtube.com/embed/PS-uywnnzWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="movie" class="border rounded border-secondary border-2" width="640" height="380" src="https://www.youtube.com/embed/4Yz6y17dSJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="movie" class="border rounded border-secondary border-2" width="640" src="https://www.youtube.com/embed/wrXnQXyF2IQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


];
// let h=0;//view vedios in ordered 
btnv.addEventListener("click", (e)=>{
    // movieParent.innerHTML=arrvedio[h];
    // if(h>=(arrvedio.length-1)){
    //     h=0;
    // }
    // else{
    //     h++;
    // }//veiw vedios in ordered
    movieParent.innerHTML=arrvedio[Math.floor(Math.random()*(arrvedio.length))];
    randomHearts();
});
//////////////////////////////////////////////////////////////////////////////////////
var quoteParent =document.querySelector(".quoteParent");
var arrquote =[
    ` <blockquote id="quote" dir="rtl" lang="ar" class="sidekick">
    لا تيأس من الحياة ياصديقي اجعلها تيأس منك<span class="text-warning">&#128521;</span>. <br><cite> شيماء حسن</cite></blockquote>`,
    ` <blockquote id="quote" dir="rtl" lang="ar" class="sidekick">
    لا تبرر أخطائك بل إجلطها بالمزيد <span class="text-warning">&#128514;&#128514;</span>. <br><cite> شيماء حسن</cite></blockquote>`,
    ` <blockquote id="quote" dir="rtl" lang="ar" class="sidekick">
    الحياة ليست سباق ف إهدى كده وrelax ياصحبي<span class="text-warning">&#128526;</span>. <br><cite> شيماء حسن</cite></blockquote>`,
    ` <blockquote id="quote" dir="rtl" lang="ar" class="sidekick">
    أن تضيء شمعة صغيرة خير لك من أن تنفق عمرك تلعن الظلام<span class="text-danger">&#128149;</span>. <br><cite> شيماء حسن</cite></blockquote>`,
    ` <blockquote id="quote" dir="rtl" lang="ar" class="sidekick">
    لا مستحيل تحت الشمس<span class="text-warning">&#128170;	</span>. <br><cite> شيماء حسن</cite></blockquote>`

];
// let index=0;//view vedios in ordered 
btnq.addEventListener("click", (e)=>{
    // movieParent.innerHTML=arrvedio[h];
    // if(index>=(arrvedio.length-1)){
    //     index=0;
    // }
    // else{
    //     index++;
    // }//veiw vedios in ordered
    quoteParent.innerHTML=arrquote[Math.floor(Math.random()*(arrquote.length))];
    randomHearts();
});
