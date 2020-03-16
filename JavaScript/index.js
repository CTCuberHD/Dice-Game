var diceRollOne;
var diceRollTwo;

function calculateDiceOne()
{
   diceRollOne = randomiser(diceRollOne);
   var randomImageSourceOne = createImageSource(randomImageSourceOne, diceRollOne);
   document.querySelectorAll("img")[0].setAttribute("src", randomImageSourceOne);
}

function calculateDiceTwo()
{
   diceRollTwo = randomiser(diceRollTwo);
   var randomImageSourceTwo = createImageSource(randomImageSourceTwo, diceRollTwo);
   document.querySelectorAll("img")[1].setAttribute("src", randomImageSourceTwo);
}

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

function calculateWinner(x, y)
{
   if(x > y)
   {
      document.querySelector("h1").textContent = "Player 1 Wins!";
   }

   else if(y > x)
   {
      document.querySelector("h1").textContent = "Player 2 Wins!";
   }

   else
   {
      document.querySelector("h1").textContent = "It's a Draw!";
   }
}


function start()
{
   calculateDiceOne();
   calculateDiceTwo();
   calculateWinner(diceRollOne, diceRollTwo);
   document.querySelector("button").textContent = "Play Again"
}