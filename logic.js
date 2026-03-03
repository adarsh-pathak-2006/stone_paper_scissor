const pictureShit=()=>{
    pic1.style.backgroundImage='url("pics/white.jpg")'
    pic2.style.backgroundImage='url("pics/white.jpg")'
    pic1.style.backgroundSize="cover"
    pic2.style.backgroundSize="cover"
}
const check=()=>{
if (flag1===0 && flag2===1){
    second.textContent=Number(second.textContent)+1
    setTimeout(pictureShit,1000)
}
else if(flag1===0 && flag2===2){
    first.textContent=Number(first.textContent)+1
    setTimeout(pictureShit,1000)
}
else if(flag1===1 && flag2===0){
    first.textContent=Number(first.textContent)+1
    setTimeout(pictureShit,1000)
}
else if(flag1===1 && flag2===2){
    second.textContent=Number(second.textContent)+1
    setTimeout(pictureShit,1000)
}
else if(flag1===2 && flag2===0){
    second.textContent=Number(second.textContent)+1
    setTimeout(pictureShit,1000)
}
else if(flag1===2 && flag2===1){
    first.textContent=Number(first.textContent)+1
    setTimeout(pictureShit,1000)
}
else if(flag1===flag2){
   setTimeout(pictureShit,1000) 
}
if(Number(first.textContent)>=5){
    alert("Horraahhh player 1 won")
    first.textContent=""
    second.textContent=""
    pictureShit()
}
else if(Number(second.textContent)>=5){
    alert("hoorahhhhh player 2 won")
    first.textContent=""
    second.textContent=""
    pictureShit()
}
}
const clkst=()=>{
    pic1.style.backgroundImage='url("pics/rock.jpg")'
    pic1.style.backgroundSize="cover"
    flag1=0
}
const clkpa=()=>{
    pic1.style.backgroundImage='url("pics/paper.jpg")'
    pic1.style.backgroundSize="cover"
    flag1=1
}
const clksc=()=>{
    pic1.style.backgroundImage='url("pics/scissor.jpg")'
    pic1.style.backgroundSize="cover"
    flag1=2
}
const clkst1=()=>{
    pic2.style.backgroundImage='url("pics/rock.jpg")'
    pic2.style.backgroundSize="cover"
    flag2=0
    check()
}
const clkpa1=()=>{
    pic2.style.backgroundImage='url("pics/paper.jpg")'
    pic2.style.backgroundSize="cover"
    flag2=1
    check()
}
const clksc1=()=>{
    pic2.style.backgroundImage='url("pics/scissor.jpg")'
    pic2.style.backgroundSize="cover"
    flag2=2
    check()
}

let flag1;
let flag2;
let stone1=document.getElementById("stone1")
let paper1=document.getElementById("paper1")
let scissor1=document.getElementById("scissor1")
let stone2=document.getElementById("stone2")
let paper2=document.getElementById("paper2")
let scissor2=document.getElementById("scissor2")
let pic1=document.getElementById("pic1")
let pic2=document.getElementById("pic2")

stone1.addEventListener("click",clkst)
paper1.addEventListener("click",clkpa)
scissor1.addEventListener("click",clksc)
stone2.addEventListener("click",clkst1)
paper2.addEventListener("click",clkpa1)
scissor2.addEventListener("click",clksc1)

let first=document.getElementById("1st")
let second=document.getElementById("2nd")

