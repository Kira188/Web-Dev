var dict = ['tom-1', 'tom-2', 'tom-3', 'tom-4', 'crash', 'kick-bass', 'snare'];
var butDrum = document.querySelectorAll(".drum");

for (let i = 0; i < butDrum.length; i++) {
    butDrum[i].addEventListener("click", function() {
        this.style.color ="white"
        gotClicked(i, this);
        // setTimeout(() => {butDrum.style.color ="#DA0463"; }, 400);
    });
}

function gotClicked(i, val) {
    var sound = new Audio('./sounds/' + dict[i] + '.mp3');
    sound.play();
   
    setTimeout(() => {val.style.color ="#DA0463"; }, sound.currentTime+100);
}

