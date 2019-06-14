alert("Goodbye")
const online = function(){
const input1=document.getElementById('username');
const input2=document.getElementById('password'); 

if (input1.value == 'admin' && input2.value == 'admin'){
  alert("successful");
  window.location="chi.html"
}else{ 
  alert("incorrect");
  return false
}
}