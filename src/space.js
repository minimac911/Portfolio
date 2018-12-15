function createStaicStar() {
    var space = document.getElementById("space");
    var star = document.createElement("div");

    space.appendChild(star);
    star.className = "pulse";

    star.style.marginLeft = randNumGen() + "%";

    let mTop = randNumGen() - 25;
    if (mTop < 0) {
        mTop = randNumRange(0, 20);
    }
    star.style.marginTop = mTop + "%";

    var colour = getRandomColor();
    star.style.backgroundColor = colour;

    let widthAndHeigth = randNumRange(2, 6)
    star.style.width = widthAndHeigth + "px";
    star.style.height = widthAndHeigth + "px";
    if(randNumGen()<=30){
        star.style.animation = "pulse " + randNumRange(1, 9) + "s infinite";
    }else{
        star.style.animation = "null";
    }
   
}

//----------RANFOM GENERATOR FUNCTIONS------------------------------------------
function randNumRange(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function randNumGen() {
    let num = Math.floor((Math.random() * 99) + 1);
    return num;
}

function randAmountStars() {
    let num = Math.floor((Math.random() * 50) + 30);
    return num;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//-----------END OF RANDOM FUNCTIONS   -----------------------------------------

var planet = document.getElementById("circle");
var option = [];
option.push(document.getElementById("planet_git"));
option.push(document.getElementById("planet_about")); 
option.push(document.getElementById("planet_contact"));  
var blnClicked = false;
planet.onclick = function(){
    var counter = 0;
    var speed = 0.3;
    if(!blnClicked){//GOING FORWARD
        planet.style.left = 20+"px";
        planet.style.animationPlayState = "paused";
        option.forEach((x)=>{
            x.style.left = 45+"px";
        });
        //animation for the option planets
        option.forEach((x)=>{
            x.style.transition = "left "+speed+"s 0."+counter+"s";
            x.style.webkitTransition = "left "+speed+"s 0."+counter+"s";
            counter++;
        });
    }else{//GOING BACK
        planet.style.left = -60+"px";
        planet.style.animationPlayState = "running";
        option.forEach((x)=>{
            x.style.left = -200+"px";
        });
        //animation for the option planets\
        counter = option.length
        option.forEach((x)=>{
            x.style.transition = "left "+speed+"s 0."+counter+"s";
            x.style.webkitTransition = "left "+speed+"s 0."+counter+"s";
            counter--;
        });
    }
    counter = option.length-counter;
    planet.style.transition = "left "+speed+"s 0."+counter+"s";
    planet.style.webkitTransition = "left "+speed+"s 0."+counter+"s";
    blnClicked = !blnClicked;
};

function create(){
    let numStars = randNumRange(100, screen.width * 0.05);
    for (let i = 0; i < numStars; i++) {
        createStaicStar();
    }
}
create();


