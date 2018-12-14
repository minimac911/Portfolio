function createStar(){
    var space = document.getElementById("space");
    var star = document.createElement("div");
    space.appendChild(star);
    if(randNumGen()<=20){
        star.id = "group-one";
    }
    star.className = "pulse";
    star.style.marginLeft = randNumGen()+"%";
    let mTop = randNumGen()-75;
    if(mTop<0){
        mTop = randNumRange(0,20);
    }
    star.style.marginTop = mTop+"%";
    var colour = getRandomColor();
    star.style.backgroundColor = colour;
    let widthAndHeigth = randNumRange(1,7)
    star.style.width = widthAndHeigth + "px";
    star.style.height = widthAndHeigth + "px";
    star.style.animation = "pulse "+randNumRange(1,10)+"s infinite";
}

//----------RANFOM GENERATOR FUNCTIONS------------------------------------------
function randNumRange(min, max){
    return Math.floor((Math.random() * max) + min);
}

function randNumGen(){
    let num = Math.floor((Math.random() * 99) + 1);
    return num;
}

function randAmountStars(){
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

let numStars = randNumRange(10,screen.width*0.1);
for(let i = 0; i < numStars; i++){
    createStar();
}