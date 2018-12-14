var stars = [];

function createStar(){
    var space = document.getElementById("space");
    var star = document.createElement("div");
    space.appendChild(star);
    star.className = "pulse";
    star.style.marginLeft = randPosGen()+"%";
    star.style.marginTop = randPosGen()+"px";

}

//random number generator
function randPosGen(){
    let num = Math.floor((Math.random() * 99) + 1);
    return num;
}

function randColorPicker(){

}

function randAmountStars(){
    let num = Math.floor((Math.random() * 50) + 30);
    return num;
}

for(let i = 0; i < randAmountStars(); i++){
    createStar();
}