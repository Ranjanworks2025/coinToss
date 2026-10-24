let btn=document.querySelector("#btn");
let coinface=document.querySelector(".coin-face");
let coinback=document.querySelector(".coin-back");
let base=0;
coinback.style.visibility="hidden";



btn.addEventListener("click",function(){
  console.log("Btn clicked!");
  btn.style.backgroundColor="green";
  btn.style.color="white";
  btn.disable=true;
  let randomNumber=Math.random();
  console.log(randomNumber)
  base=base+1800;
  let finalAngle=base;
  if(randomNumber<0.5){
    finalAngle=base;
    coinface.style.visibility="visible";
    coinback.style.visibility="hidden";
  }
  else{
    finalAngle=base+180;
coinface.style.visibility="hidden";
coinback.style.visibility="visible";
  }
  // coinface.style.transform="perspective(800px) rotateY(" + finalAngle + "deg)";
   setTimeout(()=>{
    btn.disable=false;
    // btn.style.backgroundColor="originalColor";
  },1000);

 

  
}
)

