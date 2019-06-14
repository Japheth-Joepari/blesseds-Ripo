const send = document.querySelector("#send")
const receive = document.querySelector("#receive")
const input = document.querySelector("#textarea").value
const chatArea = document.querySelector(".chatarea")
const line = document.createElement("div")
line.className ="dom"
line.style.height = "10px"
line.style.width = "30px"
line.style.backgroundColor = "grey"
line.style.textAlign = "center"
line.style.color = "red"
line.style.right = "0px"
line.style.float = "right"
line.style.clear = "left"


send.addEventListener("click",(e)=>{
   
    line.appendChild(document.createTextNode(input))
    chatArea.innerHTML.appendChild(line)
    
})
console.log(send)