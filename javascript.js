// var arrayName =["images/dice01png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png",]
    document.getElementById("title").innerHTML = "Good bye";
   var num1 = Math.floor(Math.random() * 6 +1);// random number 1to 6
   var num2 = Math.floor(Math.random() * 6 +1);

   console.log(num1);
   console.log(num2);
    // if it generate 4c=ad a random number then
    //             images/dice     4      .png =   dice4.png
   var num1Path = "images/dice" + num1 + ".png";//images/dice1 to dice6.png
   var num2Path = "images/dice" + num2 + ".png";

  document.querySelector(".img1").setAttribute("src",num1Path);
  document.querySelector(".img2").setAttribute("src",num2Path);

  if (num1 === num2){
    document.querySelector("h1").innerHTML = "Draw!";
  }
  else if (num1 > num2){
    document.querySelector("h1").innerHTML = "Player 1 Wins🚩";
  }
  else{
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins";
  }
