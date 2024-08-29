// Create variables up here.
var bg;
var startSprites, gameSprites = [];
var monkeyPlayer;
var tack;
var redBalloon;
var pinkballoon;
var jungle, monkey, banana;
var screen = "start";
var popped = 0;
var score;
var num1, num2, feedback, answer;

function setup() {
  bg = createSprite(200, 200);
  bg.addImage(loadImage("assets/Junglebackground0.png"));
  bg.scale = 2.3;
  monkeyPlayer = createSprite(50, 200);
  monkeyPlayer.addImage(loadImage("assets/Monkey0.png"));
  monkeyPlayer.scale = 0.2;
  tack = createSprite(65, 260);
  tack.addImage(loadImage("assets/Tack0.png"));
  tack.scale = 0.2;
  redBalloon = createSprite(400, random(400, 10));
  redBalloon.addImage(loadImage("assets/Redballoon0.png"));
  redBalloon.scale = 0.1;
  redBalloon.velocityX = -4;
  pinkBalloon = createSprite(400, random(400, 10));
  pinkBalloon.addImage(loadImage("assets/Pinkballoon0.png"));
  pinkBalloon.scale = 0.1;
  pinkBalloon.velocityX = -4;

  jungle = createSprite(200, 200);
  jungle.addImage(loadImage("assets/Junglebackground0.png"));
  jungle.scale = 1.3;
  monkey = createSprite(50, 210);
  monkey.scale = 0.2;
  monkey.addImage(loadImage("assets/Monkey0.png"));
  banana = createSprite(350, 200);
  banana.addImage(loadImage("assets/banana0.png"));
  banana.scale = 0.2;
  startSprites = [jungle, banana, monkey];
  gameSprites = [bg, monkeyPlayer, tack, redBalloon, pinkBalloon];

  generateProblem();
}

function draw() {
  console.log(screen);
  if (screen == "start") {
    drawStart();
  } else if (screen == "game") {
    drawGame();
  }
}

function drawGame() {
  movement();
  if ((redBalloon.x) <= 0) {
    redBalloon.y = random(50, 350);
    redBalloon.x = 400;
  }
  if (tack.isTouching(redBalloon)) {
    redBalloon.x = 400;
    redBalloon.y = random(50, 350);
    popped = popped + 1;
  }
  if ((pinkBalloon.x) <= 0) {
    pinkBalloon.y = random(50, 350);
    pinkBalloon.x = 400;
  }
  if (tack.isTouching(pinkBalloon)) {
    pinkBalloon.x = 400;
    pinkBalloon.y = random(50, 350);
    popped = popped + 1;
  }

  gameSprites.forEach(function(sprite) {
    drawSprite(sprite);
  });

  checkPopped();

  drawMath();

  textSize(36);
  fill("white");
  text("popped:", 70, 40);
  text(popped, 150, 40);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Pop as many balloons as the answer to the problem", 200, 360);
  text("press enter to submit, r to reset", 200, 385);
}


function drawStart() {
  startSprites.forEach((sprite) => {
    drawSprite(sprite);
  });
  fill("black");
  textSize(80);
  textFont("Arial Bold");
  text("Math", 115, 120);
  text("Monkey", 70, 180);
  textSize(30);
  text("(click to continue)", 150, 220);
  if (mouseDown()) {
    screen = "game";
  }
}


function movement() {
  if (keyDown("up")) {
    monkeyPlayer.y = monkeyPlayer.y - 6;
    tack.y = tack.y - 6;
  }
  if (keyDown("down")) {
    monkeyPlayer.y = monkeyPlayer.y + 6;
    tack.y = tack.y + 6;
  }
}

// Add all code that creates sprites, adds animations etc. here.
function checkPopped() {
  if (keyWentDown("enter")) {
    checkAnswer();
  }

  if (keyWentDown("r")) {
    popped = 0;
  }
}

function generateProblem() {
  // Generate random numbers for the division question
  num2 = floor(random(1, 10));
  answer = floor(random(1, 10));
  num1 = num2 * answer;

  // Clear feedback
  feedback = "";
}

function drawMath() {
  // Display the question
  fill("white");
  textSize(32);
  text(`${num1} / ${num2} = ?`, 20, 80);

  // Display feedback
  textAlign(CENTER, CENTER);
  textSize(16);
  text(feedback, 100, 340);
}

function checkAnswer() {
  if (popped == answer) {
    score = score + 1;
    feedback = "Correct! Keep Going";
    generateProblem();
    popped = 0;
  } else {
    feedback = "Try Again! You got it";
    popped = 0;
  }
}