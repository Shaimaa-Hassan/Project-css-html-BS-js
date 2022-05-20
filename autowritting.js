// var i =1;
// function content(){
//     var tot ="good courses";
//     title.innerHTML = tot.slice(0,i);
//     if(tot.length<i){
//         i=1
//     }
//     else{
//         i++
//     }
// }
// setInterval(content, 300);//invoke function to begining work and set time to be repeated 
////////////////////////////////////////////////////////another solution
var n=0;
function content(){
    var tot ="good company courses";
    var x=tot.split("");
    title.textContent+= x[n];
    if((x.length-1)< n){
                n=1
                title.textContent=x[0];
            }
            else{
                n++
            }

}
setInterval(content, 200);