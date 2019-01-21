var ham = document.getElementById("hamburger");
var lineOne = document.getElementById("line-one");
var lineTwo = document.getElementById("line-two");
var lineThree = document.getElementById("line-three");
var clicked = false;

ham.addEventListener("click", function (e) {
    clicked = !clicked;
    if (clicked) {
        lineOne.style.animation = "hamburger-clicked-one-active 0.7s forwards";
        lineOne.style.webkitAnimation = "hamburger-clicked-one-active 0.7s forwards";
    } else {
        lineOne.style.animation = "hamburger-clicked-one-disable 0.7s forwards";
        lineOne.style.webkitAnimation = "hamburger-clicked-one-disable 0.7s forwards";
    }
}, false);