var randomNumber1 = Math.floor((Math.random())*6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png"; //concatenaation. dice1.png-dice6.png. Use a random number to select a random image. We do this because all the images have the same name, only the number change
var randomImageSource = "images/" + randomDiceImage; // images/dice1 - images/dice6
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor((Math.random())* 6) +1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2 ;
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏅 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins 🏅!";
} else {
    document.querySelector("h1").innerHTML = "It's a draw";
}