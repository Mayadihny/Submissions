var a = document.createElement("div");
var b = document.querySelector("div");
document.body.appendChild(a);

var c = document.querySelector("input");
c.addEventListener("keyup",popcorn);
function popcorn () {
  a.innerHTML=c.value;
}
