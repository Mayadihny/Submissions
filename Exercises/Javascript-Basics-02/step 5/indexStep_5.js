var img1 = document.querySelector("#image1");
var img2 = document.querySelector("#image2");
var img3 = document.querySelector("#image3");
var img4 = document.querySelector("#image4");
var img5 = document.querySelector("#image5");

img1.addEventListener("mouseover", imgs)
img2.addEventListener("mouseover", imgs)
img3.addEventListener("mouseover", imgs)
img4.addEventListener("mouseover", imgs)
img5.addEventListener("mouseover", imgs)

function imgs(ev){
    if (ev.target.id == "image1")
    {    ev.target.src = "images/image1_2.jpg" 

}
else if(ev.target.id == "image2"){
ev.target.src = "images/image2_2.jpg"

}
else if (ev.target.id == "image3"){
    ev.target.src ="images/image3_2.jpg"
}
else if (ev.target.id == "image4"){
ev.target.src = "images/image4_2.jpg"
}

else if (ev.target.id== "image5")
{
    ev.target.src = "images/image5_2.jpg"
}
}
 