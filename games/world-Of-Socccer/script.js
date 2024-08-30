
var field, heart, boy1, boy2, boy3, boy4, boy5, boy6, boy7, ball;

var red;
var balon;
var gameState = "start";
var lives;
var answer;
let num1, num2;

var boys = [];
var startSprites = [];
var gameSprites = [];

var score = 0;

function setup() {
  // creating the setup/canvas & boy
  createCanvas(400, 400);

  field = createSprite(200, 200);
  field.addImage(loadImage("assets/field.png"));
  field.scale = 3


  heart = createSprite(90, 60, 10, 10);
  heart.addImage(loadImage("assets/heart.png"));
  heart.scale = 0.15;


  boy1 = createSprite(200, 70, 10, 10);
  boy1.addImage(loadImage("assets/boy.png"));
  boy1.scale = 0.15;
  boy2 = createSprite(200, 110, 10, 10);
  boy2.addImage(loadImage("assets/boy.png"));
  boy2.scale = 0.15;
  boy3 = createSprite(200, 150, 10, 10);
  boy3.addImage(loadImage("assets/boy.png"));
  boy3.scale = 0.15;
  boy4 = createSprite(200, 190, 10, 10);
  boy4.addImage(loadImage("assets/boy.png"));
  boy4.scale = 0.15;
  boy5 = createSprite(200, 150, 10, 10);
  boy5.addImage(loadImage("assets/boy.png"));
  boy5.scale = 0.15;
  boy6 = createSprite(200, 70, 10, 10);
  boy6.addImage(loadImage("assets/boy.png"));
  boy6.scale = 0.15;
  boy7 = createSprite(200, 70, 10, 10);
  boy7.addImage(loadImage("assets/boy.png"));
  boy7.scale = 0.15;

  boys = createGroup();
  boys.add(boy1);
  boys.add(boy2);
  boys.add(boy3);
  boys.add(boy4);
  boys.add(boy5);
  boys.add(boy6);
  boys.add(boy7);


  ball = createSprite(200, 350, 10, 10);
  ball.addImage(loadImage("assets/ball0.png"));
  ball.scale = 0.2;

  // heart?
  red = createSprite(200, 10, 400, 20);
  red.shapeColor = "black";

  createEdgeSprites();
  //start screen 
  gameState = "start";
  lives = 3;
  //idk
  fondo = createSprite(200, 200);
  fondo.addImage(loadImage('assets/background.png'));
  fondo.scale = 1.3;

  balon = createSprite(370, 100);
  balon.scale = 0.5
  balon.addImage(loadImage('assets/balon.png'));
  balon.rotation = balon.rotation + 5;
  gameSprites = [field, heart, boy1, boy2, boy3, boy4, boy5, boy6, boy7, ball];

  startSprites = [balon];
  generateQuestion();
}

function draw() {
  if (gameState == "start") {
    drawStart();
  } else if (gameState == "serve" || gameState == "play" || gameState == "win") {
    drawGame();
  }
}

function drawMath() {
  fill("black");
  textSize(32);
  text(`${num1} + ${num2} =`, 35, 340);
}

// function keyPressed() {
//   if (keyCode === ENTER) {
//     checkAnswer();
//     generateQuestion();
//   }
// }

function generateQuestion() {
  num1 = random(1, 10).toFixed(1);
  //num1.toFixed(1);  // Adjust the range based on your preference
  num2 = random(1, 10).toFixed(1);
  answer = float(num1) + float(num2);
  mathanswer();
}

function checkAnswer(item) {
  // TODO Elmer 
  // return true if item.text == answer
  // else return false

  if (parseFloat(item.text) == answer) {
    // answer is correct! Do what you want here:
    score = score + 1
    return true;
  } else {
    // answer is incorrect! Do what you want here:
    lives = lives - 1;
    message = "Try again"
    return false;
  }
}

function drawGame() {

  gameSprites.forEach((s) => drawSprite(s));

  // GAME END 
  if (gameState === "win") {
    drawWin();
  } else if (gameState === "serve") {
    drawServe();
  } else if (gameState == "play") {
    drawPlay();
  }

  drawMath();

}

function drawServe() {
  lives = 3;
  boy1.x = 200;
  boy2.x = 200;
  boy3.x = 200;
  boy4.x = 200;
  boy5.x = 200;
  boy6.x = 200;
  boy7.x = 200;
  ball.velocityX = 0;

  instructionsText();

  if (keyDown("space")) {
    startBoysMove();
    gameState = "play";
  }
}

function drawPlay() {
  boyBounceOffWalls();
  ballAndBoyInteractions();
  showScore();

  if (keyDown("space")) {
    ball.velocityY = -30;
  }

  if (ball.isTouching(topEdge)) {
    ball.y = 350;
    ball.velocityY = 0;
  }

  if (lives === 0) {
    gameState = "serve";
  }
}

function drawWin() {
  fill("gold");
  textSize(50);
  text("YOU WIN", 90, 170);
  textSize(20);
  text("Press *SPACE* to Play Aga in", 55, 250);
  playSound("sound://category_achievements/bubbly_game_achievement_sound.mp3");
  if (keyDown("space")) {
    ball.velocityY = 0;
    ball.velocityX = 0;
    gameState = "serve";
  }
}


function instructionsText() {
  textSize(25);
  fill("black");
  text("Press *SPACE* to Shoot the boys", 5, 245);
  text("if the ball misses the boys,", 15, 280);
  text(" you lose lives ", 90, 305);
}

function showScore() {
  textSize(18);
  text("score:", 280, 30);
  text(score, 350, 30);
}

function drawStart() {
  startSprites.forEach((s) => drawSprite(s));
  fill("black");
  textSize(30);
  text("Mundo del Futbol", 40, 70);
  fill("black");
  text("Empiezo", 60, 200);
  balon.bounce(balon);

  if (mouseDown()) {
    gameState = "serve";
  }
}

// this fuction controls the velocity of the boys
function startBoysMove() {
  boy1.velocityX = 1;
  boy2.velocityX = 3;
  boy3.velocityX = 5;
  boy4.velocityX = 6.5;
  boy5.velocityX = 4.5;
  boy6.velocityX = 2;
  boy7.velocityX = 2.5;
}

// this function contols the boys boucnce off the walls from the left wall to the right wall
function boyBounceOffWalls() {
  boy1.bounceOff(edges);
  boy2.bounceOff(edges);
  boy3.bounceOff(edges);
  boy4.bounceOff(edges);
  boy5.bounceOff(edges);
  boy6.bounceOff(edges);
  boy7.bounceOff(edges);
}

function ballAndBoyInteractions() {
  if (ball.isTouching(boy1)) {
    // if the ball is touching the boy + check answer is true
    if (checkAnswer(boy1)) {
      boys.remove(boy1);
      boy1.destroy();
      generateQuestion();
      // add score
      score = score + 1;
    }
    resetBall();
  }
  if (ball.isTouching(boy2)) {
    if (checkAnswer(boy2)) {
      boys.remove(boy2);
      boy2.destroy();
      generateQuestion();
      // add score
      score = score + 1;
    }
    resetBall();
  }
  if (ball.isTouching(boy3)) {
    if (checkAnswer(boy3)) {
      boys.remove(boy3);
      boy3.destroy();
      generateQuestion();
      // add score
      score = score + 1;
    }
    resetBall();
  }
  if (ball.isTouching(boy4)) {
    if (checkAnswer(boy4)) {
      boys.remove(boy4);
      boy4.destroy();
      generateQuestion();
      // add score
      score = score + 1;
    }
    resetBall();
  }
  if (ball.isTouching(boy5)) {
    if (checkAnswer(boy5)) {
      boys.remove(boy5);
      boy5.destroy();
      generateQuestion();
      // add score
      score = score + 1;
    }
    resetBall();
  }
  if (ball.isTouching(boy6)) {
    if (checkAnswer(boy6)) {
      boys.remove(boy6);
      boy6.destroy();
      generateQuestion();
      // add score
      score = score + 1;
    }
    resetBall();
  }
  if (ball.isTouching(boy7)) {
    if (checkAnswer(boy7)) {
      boys.remove(boy7);
      boy7.destroy();
      generateQuestion();
      // add score
      score = score + 1;
    }
    resetBall();
  }
}
function drawText() {
  textSize(20);
  fill(rgb(135, 235, 105));
  text("LIVES     : " + lives, 10, 65);


  fill("red");
  textSize(20);
  text("GOALLINE", 105, 17);
}

function drawgameover() {
  if (lives > 0 && boy1.x >= 700 && boy2.x >= 700 && boy3.x >= 700 && boy4.x >= 700 && boy5.x >= 700 && boy6.x >= 700 && boy7.x >= 700) {
    gameState = "win";
  }
}

function resetBall() {
  ball.y = 350;
  ball.velocityY = 0;

  if (keyDown("space")) {
    ball.velocityY = -30;
  }
}

// draw math function

// check answer

// loop through the boys and it puts a number on thier chest and its makes the number into a integer
function mathanswer() {
  for (let i = 0; i < boys.size(); i++) {
    console.log(i);
    if (i == 0) {
      boys.get(i).text = answer;
    } else {
      boys.get(i).text = random(0, 20).toFixed(1);
    }
  }
}

