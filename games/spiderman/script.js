let numerator1, numerator2, denominator, option1, option2, option3;
let userAnswerInput, submitButton, correctText;
let feedback;
//Feedback for the user

//all the variables
var bg1;
var bg2;
var bg3;
var player;
var rock;
var rock2;
var rock3;
var health;
var score;
var screen;
var badguy
var startscreenSprite;
var startScreenSprites = [];
var gameScreenSprites = [];
//var gameScreenSprites = [];

var bgImg;

function preload() {
  bgImg = loadImage('assets/background0.png');
}


function setup() {
  createCanvas(400, 400)
  score = 0;
  health = 10;
  //controls health and score
  screen = "start";
  bg1 = createSprite(200, -200);
  bg1.addImage(bgImg);
  bg1.scale = 1.04;
  bg1.velocityY = 3;
  bg2 = createSprite(200, 200);
  bg2.addImage(bgImg);
  bg2.scale = 1.04;
  bg2.velocityY = 3;
  bg3 = createSprite(200, 600);
  bg3.addImage(bgImg);
  bg3.scale = 1.04;
  bg3.velocityY = 3;

  console.log(bg1.width);
  console.log(bg2.height);

  startScreenSprite = createSprite(200, 140);
  startScreenSprite.addImage(loadImage("assets/spiderman.png"));
  startScreenSprite.scale = 0.4;

  player = createSprite(200, 200);
  player.addImage(loadImage("assets/spiderman.png"));
  //creates the player sprite 
  player.scale = 0.2;
  rock = createSprite(310, 5);
  rock.addImage(loadImage("assets/rock0.png"));
  //adds iamge to the rock sprite
  rock.scale = 0.15;
  rock.velocityY = 5;
  //makes the rock sprite move down

  option1 = createSprite(50, 100, 25, 15);
  option1.shapeColor = color('rgba(0, 0, 0, 255)');
  //creates the first option sprite
  option2 = createSprite(50, 300, 25, 15);
  option2.shapeColor = color('rgba(0, 0, 0, 255)');
  //creates the second option sprite
  option3 = createSprite(350, 200, 25, 15);
  option3.shapeColor = color('rgba(0, 0, 0, 255)');
  //creates the third option sprite
  badguy = createSprite(200, 350);
  badguy.addImage(loadImage("assets/badguy.png"));
  badguy.scale = 0.3;

  gameScreenSprites = [bg1, bg2, bg3, player, rock, option1, option2, option3, badguy];
  startScreenSprites = [startScreenSprite];
  //adds all the sprites to the game screen sprites array

  generateFractions();
}
//generates the fractions

function draw() {
  if (screen == "start") {
    drawStart();
  } else if (screen == "game") {
    drawGame();
  }
  //draws the start screen and game screen

  if (player.isTouching(option1)) {
    checkAnswer(option1);
  }
  if (player.isTouching(option2)) {
    checkAnswer(option2);
  }
  if(player.isTouching(option3)) {
    checkAnswer(option3);
  }
  if (player.isTouching(badguy)) {
    health = health-1;
    player.x = 200;
    player.y = 200;
  }
}
//checks if the player is touching the option sprites
function drawStart() {
  // draw background
  background("black");
  textSize(40);
  text("Press Enter To Begin", 15, 275);
  textSize(40);
  text("Use WASD to swing", 20, 340);
  textSize(20);
  text("Swing to the side with the right answer", 10, 20)
  fill("white");
  ellipse(230, 100, 30, 20);

  if (keyDown("enter")) {
    screen = "game";
  }
  startScreenSprites.forEach((s) => drawSprite(s));


}
//draws the start screen

function drawGame() {
  background("lightblue");
  line(200, 0, player.x + 35, player.y - 42);
  // update sprites
  loopBackgrounds();
  rockmovement();
  userMovement();
  //  playerwall(bg1, bg2, bg3)
  gameScreenSprites.forEach((s) => drawSprite(s));
  // draws the game screen
  drawmath();
  //write health and score
  fill("black");
  rect(20, 10, 90, 20);
  rect(280, 10, 90, 20);
  textSize(18);
  fill("white");
  text("Score: ", 20, 25);
  text(score, 90, 25);
  //writes the score

  text("Health: ", 280, 25);
  text(health, 350, 25);
  gameover();
}
//draws the game screen


// Create your functions here
function loopBackgrounds() {
  if (bg1.y > 600) {
    bg1.y = -200;
  }
  if (bg2.y > 600) {
    bg2.y = -200;
  }
  if (bg3.y > 600) {
    bg3.y = -200;
  }
}
//makes the backgrounds loop

function userMovement() {
  //makes the player move
  if (keyDown("a") || keyDown("left")) {
    player.x = player.x - 3;
  }
  if (keyDown("d") || keyDown("right")) {
    player.x = player.x + 3
  }
  //makes the player move up, down, left, and right 
  if (keyDown("w") || keyDown("up")) {
    player.y = player.y - 3;
  }
  if (keyDown("s") || keyDown("down")) {
    player.y = player.y + 3;
  }
}

//makes the player move 

function rockmovement() {
  if (rock.y > 400) {
    rock.y = 0;
    rock.x = random(50, 350);
  }
  if (rock.y > 400)
    rock.x = random(50, 350);
  if (player.isTouching(rock)) {
    health = health - 1;
    rock.y = 0;
    rock.x = random(50, 350);
    resetSpiderMan();
  }
}

function playerwall(a, b, c, d, e, f) {
  var walls = [a, b, c, d, e, f];
  for (var i = 0; i < 6; i++) {
    if (player.isTouching(walls[i])) {
      player.velocityX = 0;
      player.velocityY = walls[i].velocityY;
    }
  }
}
//makes the player not go through the walls


function generateFractions() {
  // Generate random numerator and denominator
  numerator1 = floor(random(1, 10));
  numerator2 = floor(random(1, 10));
  denominator = floor(random(1, 10));
  correctText = (numerator1 + numerator2) + "/" + denominator;
  // Generate random operator

  option1.text = (floor(random(1, 20))) + "/" + denominator;
  option2.text = (floor(random(1, 20))) + "/" + denominator;
  option3.text = (floor(random(1, 20))) + "/" + denominator;

  // randomize y for option 1 and option 2 and option 3



  // Display the two answers
  fill("white");
  var r = random(0, 1);
  if (r < 0.3) {
    option1.text = correctText;
  } else if (r < 0.6) {
    option2.text = correctText;
  } else {
    option3.text = correctText;
  }
}
//generates the fractions

function gameover() {
  if (health == 0) {
    background("black");
    text("GAME OVER", 150, 200)
  }
}

function checkAnswer(option) {
  console.log(option.text);
  console.log(correctText);
  if (option.text == correctText) {
    score = score + 1;
    generateFractions();
    resetSpiderMan();
  } else {
    health = health - 1;
    resetSpiderMan();
  }
}
//checks if the player is touching the option sprites

function resetSpiderMan() {
  // to do: set spiderman into middle
  player.x = 200;
  player.y = 200;
}

function drawmath() {
  // Display the fraction question
  fill("white")
  textSize(24);
  text(`${numerator1} / ${denominator} + ${numerator2} / ${denominator}`, width / 2 - 60, 50);

}