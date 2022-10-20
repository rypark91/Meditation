var spaceButton = document.querySelector("#space");
var forestButton = document.querySelector("#forest");
var beachButton = document.querySelector("#beach");
var darkButton = document.querySelector("#dark");

var message = document.querySelector("#message");
var menu = document.querySelector("#menu");
var body = document.querySelector("body");
var cover = document.querySelector("#opacityBackground");
var copy = document.querySelector("#copyright");


spaceButton.addEventListener("click",function(){
    
    var song = new Audio("space explorers.mp3");
    song.play();
    clearScreen();
    message.style.color = "white";
    setTimeout(function(){
        message.style.opacity = 0;
        message.style.display = "none";
    }, 5500);
    message.innerHTML = "Take deep breaths, and explore within yourself...";
    cover.style.display = "block";
    cover.classList.add("spaceBackground");
    body.style.background = `url("space.gif")`;
    body.style.backgroundRepeat = "none";
    body.style.backgroundPosition ="center center";
    body.style.backgroundSize = "cover";
    body.style.backgroundAttachment = "fixed";
    setTimeout(function(){
        cover.style.opacity = .6;
    },11000)

});

forestButton.addEventListener("click",function(){
    var song = new Audio("The Forest and the Trees.mp3");
    song.play();
    clearScreen();
    setTimeout(function(){
        message.style.opacity = 0;
        message.style.display = "none";
    }, 5500);
    message.innerHTML = "Take deep breaths, and embrace peace...";
    cover.style.display = "block";
    cover.classList.add("forestBackground");
    body.style.background = `url("forest.gif")`;
    body.style.backgroundRepeat = "none";
    body.style.backgroundPosition ="center center";
    body.style.backgroundSize = "cover";
    body.style.backgroundAttachment = "fixed";
    setTimeout(function(){
        cover.style.opacity = .6;
    },4000)

});

beachButton.addEventListener("click",function(){
    var song = new Audio("Clean Soul.mp3");
    song.play();
    clearScreen();
    setTimeout(function(){
        message.style.opacity = 0;
        message.style.display = "none";
    }, 5500);
    message.innerHTML = "Take deep breaths, and obtain tranquity...";
    cover.style.display = "block";
    cover.classList.add("beachBackground");
    body.style.background = `url("beach.gif")`;
    body.style.backgroundRepeat = "none";
    body.style.backgroundPosition ="center center";
    body.style.backgroundSize = "cover";
    body.style.backgroundAttachment = "fixed";
    setTimeout(function(){
        cover.style.opacity = .6;
    },4000)

});

darkButton.addEventListener("click",function(){
    var song = new Audio("Ghost Story.mp3");
    song.play();
    clearScreen();
    message.style.color = "white";
    setTimeout(function(){
        message.style.opacity = 0;
        message.style.display = "none";
    }, 5500);
    message.innerHTML = "Take deep breaths, and face inner darkness head on...";
    cover.style.display = "block";
    cover.classList.add("darkBackground");
    body.style.background = `url("graveyard.gif")`;
    body.style.backgroundRepeat = "none";
    body.style.backgroundPosition ="center center";
    body.style.backgroundSize = "cover";
    body.style.backgroundAttachment = "fixed";
    setTimeout(function(){
        cover.style.opacity = .6;
    },4000)

});

function clearScreen(){
    menu.style.display = "none";
    copy.style.display = "none";
    

} 