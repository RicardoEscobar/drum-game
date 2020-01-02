// reproducir sonido

var buttons = document.querySelectorAll(".drum");

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click",
        function () {
            var buttonInnerHTML = this.innerHTML;
            playDrum(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
        });
}

// switch
function playDrum(drumPlayed) {
    switch (drumPlayed.toLowerCase()) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();    // evento keypress
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass2.mp3");
            kick.play();
            break;

        default:
            console.log(drumPlayed);
            break;    // evento keypress
    }
}

// evento keypress
document.addEventListener("keypress",
    function (event) {
        playDrum(event.key);
        buttonAnimation(event.key);
    }
);

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");
    setTimeout(
        function () {
            activeButton.classList.remove("pressed");
        }
        , 200
    );
}