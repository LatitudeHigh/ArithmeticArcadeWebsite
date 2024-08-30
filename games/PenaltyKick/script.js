// Create variables up here.
var player1, player2, net1, net2, ball;
let message = "";
let mode = "start";
let showMath = false;
var score = 0;

function setup() {
  createCanvas(400, 400);


  // Example of how to add a sprite and animation.
  player1 = createSprite(100, 200);
  player1.addImage(loadImage('assets/player 10.png'));
  player1.scale = 0.1;
  // creating player 1
  player2 = createSprite(300, 200);
  player2.addImage(loadImage('assets/player 20.png'));
  player2.scale = 0.1;
  // creating player 2
  net1 = createSprite(0, 200);
  net1.addImage(loadImage('assets/goal post 10.png'));
  net1.velocityY = 5;
  net1.scale = 0.2;
  net2 = createSprite(350, 200);
  net2.addImage(loadImage('assets/goal post 20.png'));
  net2.velocityY = 5;
  net2.scale = 0.25;
  // makes the nets go up and down

  ball = createSprite(200, 200);
  ball.addImage(loadImage('assets/ball0.png'));
  ball.velocityX = random(4, 10);
  ball.velocityY = random(4, 10);
  ball.scale = 0.1;
  createEdgeSprites();
  // creates the ball and makes it move by itself
  buttom = createSprite(200, 200);
  soccer1 = createSprite(3, 50);
  soccer2 = createSprite(370, 350);
  soccer1.addImage(loadImage('assets/ball0.png'));
  soccer2.addImage(loadImage('assets/ball1.png'));
  buttom.addImage(loadImage('assets/playbutton.png'));
  soccer1.scale = 0.2;
  soccer2.scale = 0.2;
  buttom.scale = 0.5;
}

function draw() {
  if (mode == "start") {
    drawStartScreen();
  } else if (mode == "instructions") {
    instruction();
  } else if (mode == "game") {
    drawGame();
  }
}

// This is the draw loop.
function drawGame() {
  background("green");
  playerControls();
  netControls();
  ballcontrols();
  drawSprites();
  scoreGoal();
  ball.bounceOff(bottomEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(rightEdge);

  if (showMath == true) {
    drawMath();
    resetBall();
  }

  fill("black");
  textSize(20);
  text("Score:", 280, 30);
  text(score, 350, 30);
}

function netControls() {
  if (net1.y > 400) {
    net1.velocityY = -5;
  }
  if (net1.y < 0) {
    net1.velocityY = 5;
  }
  if (net2.y > 400) {
    net2.velocityY = -5;
  }
  if (net2.y < 0) {
    net2.velocityY = 5;
  }
}
function playerControls() {
  if (keyDown("down")) {
    player2.y = player2.y + 5;
  }
  if (keyDown("up")) {
    player2.y = player2.y - 5;
  }
  if (keyDown("w")) {
    player1.y = player1.y - 5;
  }
  if (keyDown("s")) {
    player1.y = player1.y + 5;
  }
}
function ballcontrols() {
  ball.bounceOff(player2);
  ball.bounceOff(player1);
}

function scoreGoal() {
  if (ball.isTouching(net1)) {
    resetMath();
    showMath = true;
  }

  if (ball.isTouching(net2)) {
    resetMath();
    showMath = true;
  }
}

// Add other functions below here

function checkAnswer() {
  if (parseInt(userInput) === answer) {
    message = "";
    resetMath();
    showMath = false;
    ball.velocityX = random(4, 10);
    ball.velocityY = random(4, 10);
  } else {
    message = "Incorrect. Try again."
  }
}

function drawMath() {

  fill(255);
  textSize(32);
  text(`${num1} * ${num2} =`, 150, 30);

  textSize(24);
  text(userInput, 248, 26);

  text(message, 120, 43);
}

function resetMath() {
  num1 = Math.floor(random(1, 10));
  num2 = Math.floor(random(1, 10));
  answer = num1 * num2;
  userInput = '';
}

function keyPressed() {
  if (keyCode >= 48 && keyCode <= 57) {
    // Only allow numeric keys
    userInput += key;
  } else if (keyCode === BACKSPACE) {
    // Handle backspace to delete the last character
    userInput = userInput.slice(0, -1);
  } else if (keyCode === ENTER) {
    // Check the answer when Enter key is pressed
    checkAnswer();
  }
}

function resetBall() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}


function drawStartScreen() {
  background("green");
  fill("black");
  textSize(40);
  text("PENALTY KICK", 60, 80);
  text("click the buttom", 50, 350);
  text("for start", 130, 390);
  drawSprite(buttom);
  drawSprite(soccer1);
  drawSprite(soccer2);
  if (mousePressedOver(buttom)) {
    buttom.visible = false;
    soccer1.visible = false;
    soccer2.visible = false;
    mode = "instructions";
  }
}

function instruction() {
  background("green");
  textSize(35);
  fill("black");
  text("instructions screen", 60, 60);
  textSize(25);
  fill("black");
  text("press w and s for up and down.   ", 30, 130);
  text("so you can move your player1", 21, 150);
  text("press up and down so you can  ", 30, 190);
  text("moveyour player2 up and down. ", 30, 210);
  text("press right button to play", 30, 270)
  if (keyDown("right")) {
    mode = "game";
    net1.y = 200;
    net2.y = 200;
    ball.x = 200;
    ball.y = 200;
  }
}