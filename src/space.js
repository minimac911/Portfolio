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

    let widthAndHeigth = randNumRange(2, 5)
    star.style.width = widthAndHeigth + "px";
    star.style.height = widthAndHeigth + "px";
    if(randNumGen()<=25){
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

function showIt() {  
    document.getElementById("scroll-section").style.visibility = "visible";
}  
setTimeout("showIt()", 15000); // after 2 sec 

function create(){
    let numStars = randNumRange(100, screen.width * 0.07);
    for (let i = 0; i < numStars; i++) {
        createStaicStar();
    }
}

create();
