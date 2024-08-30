// this creates the variables 
let num1, num2, answer;
var soccergoal, soccerball, arrow, player, topleftanswer, bottomleftanswer, toprightanswer, bottomrightanswer, kid, ball3;

var startSprites, gameSprites, instructSprites, answers;
var lives = 3;
var score = 0;
var screen = "start"

function setup() {
  //This creates the sprites:soccergoal, arrow, player, rectangle math answers, and other players on different screens 
  createCanvas(400, 400);
  kid = createSprite(100, 200);
  kid.addImage(loadImage("assets/player.gif"));
  kid.scale = 0.5;
  ball3 = createSprite(190, 300);
  ball3.addImage(loadImage("assets/soccerball.gif"));
  ball3.scale = 0.2;
  soccerplayer = createSprite(100, 230);
  soccerplayer.addImage(loadImage("assets/player.gif"));
  soccerplayer.scale = 0.6;
  ball = createSprite(290, 280);
  ball.addImage(loadImage("assets/soccerball.gif"));
  ball.scale = 0.3;
  soccergoal = createSprite(205, 180);
  soccergoal.addImage(loadImage("assets/goal.png"));
  soccergoal.scale = 0.4;
  soccerball = createSprite(150, 368);
  soccerball.addImage(loadImage("assets/soccerball.gif"));
  soccerball.scale = 0.1;
  arrow = createSprite(148, 300);
  arrow.addImage(loadImage("assets/arrow.gif"));
  arrow.scale = 0.3;
  arrow.rotation = -100;
  player = createSprite(160, 190);
  player.addImage(loadImage("assets/player.gif"));
  player.scale = 0.35;
  topleftanswer = createSprite(50, 150, 35, 30);
  topleftanswer.shapeColor = "purple";
  bottomleftanswer = createSprite(23, 222, 35, 30);
  bottomleftanswer.shapeColor = "purple";
  toprightanswer = createSprite(260, 125, 35, 30);
  toprightanswer.shapeColor = "purple";
  bottomrightanswer = createSprite(270, 220, 35, 30);
  bottomrightanswer.shapeColor = "purple";

  //this creates the sprites for each of the screens 
  startSprites = [soccerplayer, ball]
  gameSprites = [soccergoal, soccerball, arrow, player, topleftanswer, toprightanswer, bottomleftanswer, bottomrightanswer];
  instructSprites = [kid, ball3]

  //this creates the answers in the corners of the goal 
  answers = [topleftanswer, bottomleftanswer, toprightanswer, bottomrightanswer];

  createNewProblem();
}
// this creates a draw loop for the different screens 
function draw() {
  if (screen == "start") {
    drawStartScreen();
  } else if (screen == "game") {
    drawGame();
  } else if (screen == "instructions") {
    instructionsScreen();

  } else if (screen == "end") {
  }
}
//This draws the functions
function drawGame() {
  drawGameBackground();
  userControls();
  drawSun();
  loopBall();
  gameInstructionsScreen();
  drawScore();
  drawLives();
  gameSprites = [soccergoal, soccerball, arrow, player, topleftanswer, toprightanswer, bottomleftanswer, bottomrightanswer];
  gameSprites.forEach((sprite) => { drawSprite(sprite) });
  drawMath();

  //This creates the the lives and score to change to gameover screen or game win screen 
  if (lives == 0) {
    gameoverscreen();
  }
  if (score == 5) {
    gameWin();
  }
}

//This code loops the soccer ball
function loopBall() {
  if (soccerball.x > 400) {
    soccerball.x = 150;
    soccerball.y = 368;
    soccerball.velocityX = 0;
    soccerball.velocityY = 0;
  }
  if (soccerball.x < 0) {
    soccerball.x = 150;
    soccerball.y = 368;
    soccerball.velocityX = 0;
    soccerball.velocityY = 0;
  }
  if (soccerball.y > 400) {
    soccerball.x = 150;
    soccerball.y = 368;
    soccerball.velocityX = 0;
    soccerball.velocityY = 0;
  }
  if (soccerball.y < 0) {
    soccerball.x = 150;
    soccerball.y = 368;
    soccerball.velocityX = 0;
    soccerball.velocityY = 0;
  }
}
//This creates the function for user controls to move the arrow
function userControls() {
  if (keyDown("left")) {
    arrow.rotation = arrow.rotation - 1;
  }
  if (keyDown("right")) {
    arrow.rotation = arrow.rotation + 1;
  }
  if (keyDown("space")) {
    soccerball.setSpeedAndDirection(5, arrow.rotation);
  }
}

//This creates the function to draw the background
function drawGameBackground() {
  background("skyBlue");
  noStroke();
  fill("DarkGreen");
  rect(0, 200, 400, 265);


}

//This creates the function for the sun 
function drawSun() {
  fill("yellow");
  noStroke();
  ellipse(400, 0, 150, 140);
  stroke("yellow");
  line(310, 16, 291, 32);
  stroke("yellow");
  line(329, 40, 307, 57);
  stroke("yellow");
  line(352, 60, 329, 75);
  stroke("yellow");
  line(368, 75, 356, 89);
}
//This creates the function for the start screen
function drawStartScreen() {
  background("lightblue");
  stroke("green")
  fill("black")
  textSize(30);
  text("soccer cr7 math game", 50, 70);
  textFont("ultra");
  text("press enter to start", 70, 370);

  startSprites.forEach((sprite) => { drawSprite(sprite) });

  if (keyDown("enter")) {
    screen = "instructions";

  }

}
//This creates the function for the instructions
function gameInstructionsScreen() {
  textSize(19);
  fill("black");
  text("use the arrows to to move the ball", 25, 20);
  text("press spacebar to shoot ball", 40, 40);


}
//This makes a function for the score
function drawScore() {
  fill("white");
  textSize(20);
  text("Score:", 6, 380);
  text(score, 70, 380);
}
//This makes a function for the lives left
function drawLives() {
  fill("white");
  textSize(20);
  text("Lives left:", 280, 380);
  text(lives, 371, 380);
  if (soccerball.isTouching(bottomleftanswer)) {

    resetBall();
    checkAnswer(bottomleftanswer);
  }
  if (soccerball.isTouching(toprightanswer)) {

    resetBall();
    checkAnswer(toprightanswer);
  }
  if (soccerball.isTouching(bottomrightanswer)) {

    resetBall();
    checkAnswer(bottomrightanswer);
  }
  if (soccerball.isTouching(topleftanswer)) {
    checkAnswer(topleftanswer);
    resetBall();
  }
  if (lives == 0) {
    screen = "gameOver";
  }
}

//this resets the ball when it goes off the screen 
function resetBall() {
  soccerball.x = 150;
  soccerball.y = 368;
  soccerball.velocityX = 0;
  soccerball.velocityY = 0;
}

//makes ball rotate
function instructionsScreen() {
  background("lightblue");
  fill("green");
  rect(0, 270, 400, 270);
  instructSprites.forEach((sprite) => { drawSprite(sprite) });
  ball3.rotation = ball3.rotation + -10;
  textSize(35);
  text("press S to continue", 50, 40);
  fill("black");
  textSize(23);
  text("use the arrows to move the ball", 30, 354);
  text("press spacebar to shoot ball", 60, 375);

  if (keyDown("s")) {
    screen = "game";
  }
}

//this creates the function to check answer 
function checkAnswer(item) {
  if (parseInt(item.text) == answer) {
    score = score + 1;
    createNewProblem();
    resetBall();
  } else {
    resetBall();
    lives = lives - 1;
    message = "Try again";
  }

}
//this creates the function for a new math problem
function createNewProblem() {
  num1 = Math.floor(random(1, 10));
  num2 = Math.floor(random(1, 10));
  answer = num1 * num2;

  topleftanswer.text = Math.floor(random(1, 10));
  toprightanswer.text = Math.floor(random(1, 10));
  bottomleftanswer.text = Math.floor(random(1, 10));
  bottomrightanswer.text = Math.floor(random(1, 10));

  //this creates the math answers 
  var lucky = random(0, 1);
  if (lucky < 0.25) {
    topleftanswer.text = answer;
  } else if (lucky < 0.5) {
    toprightanswer.text = answer;
  } else if (lucky < 0.75) {
    bottomleftanswer.text = answer;
  } else {
    bottomrightanswer.text = answer;
  }
}

//this creates the math equation to draw 
function drawMath() {
  textSize(30);
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(64);
  text(`${num1} * ${num2} = ?`, 180, 70);
}
//this creates a gameover screen function
function gameoverscreen() {
  background("black");
  fill("red");
  textSize(50);
  text("Game over!", 200, 200);
}
//this creates a game win screen 
function gameWin() {
  background("blue");
  fill("white");
  textSize(55);
  text("You win!", 200, 200);
}