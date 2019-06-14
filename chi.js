"use strict"
let userName = prompt ('please input your name','')
const rex = document.querySelector('.namer')
rex.innerHTML =userName;

const arr = [];
const productName = document.querySelector('.input1').value;
const price = document.querySelector('.input2').value;
const delivery = document.querySelector('.input3').value;
const save = document.querySelector('.save');


const logout = document.querySelector("#logout")
logout.addEventListener("click",goodBye)
goodBye = () =>{
    confirm("are you sure you want to log out?")
    alert("Goodbye");

   // window.location.href = "nav.html"
}

//  const obj = {
    
//  }
    
 
    
// const card=()=>{
//     arr.push(obj)
// }
 





