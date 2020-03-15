function main()
{
   var diceRoll;
   diceRoll = randomiser(diceRoll);
   console.log(diceRoll);
}

function randomiser(n)
{
   n = Math.random();
   n = n * 6;
   n = Math.floor(n) + 1;
   return n;
}

main();