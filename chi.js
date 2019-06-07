"use strict"
let userName = prompt ('please input your name','')
const rex = document.querySelector('.namer')
rex.innerHTML =userName;

const arr = [];
const productName =document.querySelector('.input1').value;
const price = document.querySelector('.input2').value;
const delivery = document.querySelector('.input3').value;
const save = document.querySelector('.save');

 const obj = {
    Productname:productName,
    Price:price,
    Delivery_mode:delivery
}
const card=()=>{
    arr.push(obj)
}







