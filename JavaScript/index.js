var diceRollOne = randomiser(diceRollOne);
var randomImageSourceOne = createImageSource(randomImageSourceOne, diceRollOne);
document.querySelectorAll("img")[0].setAttribute("src", randomImageSourceOne);

var diceRollTwo = randomiser(diceRollTwo);
var randomImageSourceTwo = createImageSource(randomImageSourceTwo, diceRollTwo);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSourceTwo);

function randomiser(x)
{
   x = Math.floor(Math.random() * 6) + 1;
   return x;
}

function createImageSource(src, roll)
{
   src = "./images/dice" + roll + ".png";
   return src;
}