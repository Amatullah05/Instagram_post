const image = document.querySelector("#image");
const heart = document.querySelector("#heart");
const like = document.querySelector(".fa-heart");
const count = document.querySelector("#count");
const dil = document.querySelector("#dil");
let likes = 0;
count.innerHTML = likes++

const doubleClick = () => {
    heart.style.display ="block"
    count.innerHTML = likes++

    if(heart.style.display === "block"){
        like.style.color = "red"
    }
    heart.style.transform  = "scale(1.5)"
    setTimeout(() => heart.style.display = "none", 500);   // Disappear after 1 second

    dil.addEventListener("click", () =>{
        dil.style.color ="black"
        count.innerHTML = likes = 0;
    })
}
image.addEventListener("dblclick", doubleClick); 

