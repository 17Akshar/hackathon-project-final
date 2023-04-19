isOpen = true;
function Open(){
var nav = document.getElementById("navbar-default")
if(isOpen == true){
  nav.classList.remove("hidden")
  nav.classList.add("visilbe")
  isOpen = false;  
}
else{
  nav.classList.remove("visible")
  nav.classList.add("hidden")
  isOpen = true
}
}