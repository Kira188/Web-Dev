var dict = ['tom-1', 'tom-2', 'tom-3', 'tom-4', 'crash', 'kick-bass', 'snare'];
var butDrum = document.querySelectorAll(".drum");

// Map keys to their respective drum sounds
var arrKey = {
    'w': 0,
    'a': 1,
    's': 2,
    'd': 3,
    'j': 4,
    'k': 5,
    'l': 6
};

// Function to animate the button
function buttonAnimation(currentKey) {
    var button = butDrum[arrKey[currentKey]];
    button.classList.add("pressed");
    setTimeout(function() {
        button.classList.remove("pressed");
    }, 100); // Adjust the duration as needed
}

// Add click event listeners to drum buttons
for (let i = 0; i < butDrum.length; i++) {
    butDrum[i].addEventListener("click", function() {
        gotClicked(i);
        buttonAnimation(Object.keys(arrKey)[i]);
    });
}

// Add keydown event listener
document.addEventListener("keydown", function(event) {
    var keyPressed = event.key.toLowerCase();
    if (arrKey.hasOwnProperty(keyPressed)) {
        var index = arrKey[keyPressed];
        gotClicked(index);
        buttonAnimation(keyPressed);
    }
});

// Function to play sound
function gotClicked(i) {
    var sound = new Audio('./sounds/' + dict[i] + '.mp3');
    sound.play();
}
