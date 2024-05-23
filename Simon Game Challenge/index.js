buttonColors = ["red","blue","green","yellow"];
var level = 0;
userClickedPattern = [];
gamePattern = [];
started = false;
function nextSequence(){
    userClickedPattern = [];
    level += 1;
    $("h1").html("Level : " + level);
    var randomNumber = Math.floor(Math.random() * 4); // 0 to 3
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    flash($("#" + randomChosenColour));
    playSound(randomChosenColour);
}
//Query to detect button press
$(".btn").on("click", function() {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});
function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence, 1000);
        }
    } else {
        gameEnded()
    }
}
function gameEnded(){
    playSound("wrong");
        $("h1").html("Game Over, Press Any Key to Restart");
        started = false;
        gamePattern = [];
        level = 0;
}
function flash(button){
    button.fadeOut(100).fadeIn(100);
}
function playSound(name){
    const rollSound = new Audio("./sounds/"+name+".mp3");
    rollSound.play();
}
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}
$(document).on("keydown", function() {
    if (!started) {
        nextSequence();
        started = true;
    }
});
