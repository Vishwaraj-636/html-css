addEventListener("mousemove",function (i){
   console.log(i.clientX,i.clientY)
   document.body.style.setProperty("--x",i.clientX+"px")
   document.body.style.setProperty("--y",i.clientY+"px")
});