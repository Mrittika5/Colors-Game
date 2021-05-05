const rcolor=()=>{
const r = Math.floor(Math.random()*256)
const g = Math.floor(Math.random()*256)
const b = Math.floor(Math.random()*256)
return `rgb(${r}, ${g}, ${b})`
}


 function color_array(length){
 const output=[];

for(let i =0;i<length;i++)
{
  output[i]=rcolor()

}

return output;
}


function pickcolor(len){
let test=Math.random()*len ;
test=Math.floor(test);
return test;


}
const rese=document.getElementById("reset")
const easy=document.getElementById("easy")
const hard=document.getElementById("hard")
const item = document.querySelectorAll(".square")
const   message=document.getElementById("message")
let numsq=6;
let pc;

rese.addEventListener("click",function(){

  for(let i=0;i<item.length;i++)
  {
    item[i].style.backgroundColor="black";
  }
  document.getElementById("color display").textContent="RGB"

  document.querySelector("h1").style.backgroundColor="#6e2daf";
    message.textContent="LETS START!!!!!!!!"

})
easy.addEventListener("click",function(){
    message.textContent=""
  this.classList.add("selected")
  hard.classList.remove("selected")
  numsq=3;
  let  color=color_array(numsq);
  console.log(color);
  const idx=pickcolor(color.length);
  pc=color[idx];

  for(let i=0;i<item.length;i++)
  {
    item[i].style.backgroundColor="black";
  }
  document.getElementById("color display").textContent=pc




  for(let i=0;i<color.length;i++){
    item[i].style.backgroundColor=color[i]}



})
hard.addEventListener("click",function(){
      message.textContent=""
  this.classList.add("selected")
  easy.classList.remove("selected")
  numsq=6
  let color=color_array(numsq);
  console.log(color)
  const idx=pickcolor(color.length);
  pc=color[idx];

  for(let i=0;i<item.length;i++)
  {
    item[i].style.backgroundColor="black";
  }
  document.getElementById("color display").textContent=pc




  for(let i=0;i<color.length;i++){
    item[i].style.backgroundColor=color[i]}



})





for(let i=0;i<numsq;i++){

  item[i].addEventListener("click", function(){
   const getcolor=this.style.backgroundColor
  if(pc===getcolor){

    for(let j=0;j<numsq;j++){
      item[j].style.backgroundColor=pc;}
      document.querySelector("h1").style.backgroundColor=pc;
  message.textContent="you WIN yaay!!!!!"




  }
  else{
    this.style.backgroundColor="black"
    this.style.borderColor="black"
  message.textContent="try again -_-"

  }
  }




  )


}
