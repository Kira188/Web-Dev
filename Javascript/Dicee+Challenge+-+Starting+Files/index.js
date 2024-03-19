function RandomImage(){
    var randomnumber1 = Math.floor(Math.random() * 6 + 1);
    var randomnumber2 = Math.floor(Math.random() * 6 + 1);
    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];
    image1.src="./images/dice" + randomnumber1 + ".png";
    image2.src="./images/dice" + randomnumber2 + ".png";
    if(randomnumber1>=randomnumber2){
        if(randomnumber1===randomnumber2){
            document.querySelector("h1").innerHTML = "Draw"
        }
        else{
            document.querySelector("h1").innerHTML = "🏁Player 1 Wins"
        }
    }
    else{
        document.querySelector("h1").innerHTML = "Player 2 Wins🏁"
    }
}

var button1 = document.querySelector("button");
button1.onclick = RandomImage;