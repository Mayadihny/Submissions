var image = document.querySelector("#image1");

image.addEventListener("mouseover", function() {
  image.style.border = "3px solid #FF0000";
})
  
image.addEventListener("mouseout", function() {
  image.style.border = "0px solid #FF0000";
})
