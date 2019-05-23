var a = document.querySelector("button");
var b = document.querySelector("input");
a.addEventListener("click", myFunction)
function myFunction() { 
   var c ;
   if (confirm("yes or no")) {
       yes=document.getElementById("name").value=" ";
       document.getElementById("surname").value=" ";
       document.getElementById("city").value=" ";
   }
}