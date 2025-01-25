// for mouse events

var NoOfDrumButtons= document.querySelectorAll(".drum").length;

for(var i= 0; i< NoOfDrumButtons; i++){

    document.querySelectorAll("button")[i].addEventListener("click",function(){

      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });

}

// for keyboard events

document.addEventListener("keypress", function(event){

   makeSound(event.key);
   buttonAnimation(event.key);

});

function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("Drum-Kit/sounds/super-kick.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("Drum-Kit/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("Drum-Kit/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("Drum-Kit/sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("Drum-Kit/sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("Drum-Kit/sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick_bass = new Audio("Drum-Kit/sounds/kick-bass.mp3");
            kick_bass.play();
            break;

        default: console.log(buttonInnerHTML);
      }
    }

    function buttonAnimation(currentkey){

        var activeButton= document.querySelector("."+ currentkey);
        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 200);
    }