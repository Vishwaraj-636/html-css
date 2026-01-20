var para = document.querySelector("p")
const chars="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
const text = para.innerHTML

var iter=0
function randomTxt(){
    const str = text.split("").map((char,idx)=>{
        if(idx<iter){
            return char
        }
        return chars.split("")[Math.floor(Math.random()*53)]
    }).join("")
    para.innerHTML=str
    iter+=0.35
}

setInterval(randomTxt,30)