// Create variables up here.
let num1, num2;
let userAnswer = '';
var x, y = 200;
let numerator1, numerator2;
let operation;
let correctAnswer;
var diner;
var chica, pizza, slices;
var gameover;
var screen = "start";
var instr;
let numerator, numpizza, divisor, answer;
let score = 0;
var start

function setup() {
  createCanvas(400, 400);

  start = createSprite(200, 200);
  start.addImage(loadImage("assets/start0.png"));
  start.scale = 3.2;

  instr = createSprite(200, 200);
  instr.addImage(loadImage("assets/instructions0.png"));
  instr.scale = 2;

  diner = createSprite(200, 200);
  diner.addImage(loadImage("assets/pic.jpg"));

  // Add all code that creates sprites, adds animations etc. here.
  chica = createSprite(200, 200);
  chica.addImage(loadImage("assets/chica0.png"));
  chica.scale = 0.1;
  slices = createGroup();
  numpizza = Math.floor(random(1, 11));
  for (var i = 0; i < numpizza; i++) {
    pizza = createSprite(random(0, 400), random(0, 400));
    pizza.addImage(loadImage("assets/pizza0.png"));
    slices.add(pizza);
  }
  slices.setScaleEach(0.1);

  gameover = createSprite(200, 200);
  gameover.addImage(loadImage("assets/diner.jpeg"));
  gameover.scale=2;
  gameover.visible = false;
  
  createEdgeSprites();
  generateQuestion(numpizza);

}


function draw() {
  if (screen == "start") {
    drawStart();
  } else if (screen == "instructions") {
    drawInstructions();
  } else if (screen == "game") {
    drawGame();
  } else if (screen == "gameover"){
    drawGameover();
  }
}
// This is the draw loop.
function drawGame() {
  background("white");
  if (keyDown("up")) {
    chica.y = chica.y - 4;
  }
  if (keyDown("down")) {
    chica.y = chica.y + 4;
  }
  if (keyDown("left")) {
    chica.x = chica.x - 3;
  }
  if (keyDown("right")) {
    chica.x = chica.x + 3;
  }
  slices.bounceOff(topEdge);
  slices.bounceOff(bottomEdge);
  slices.bounceOff(leftEdge);
  slices.bounceOff(rightEdge);
  chica.collide(rightEdge);
  chica.collide(leftEdge);
  chica.collide(topEdge);
  chica.collide(bottomEdge);
  for (var i = 0; i < numpizza; i++) {
    pizza = slices.get(i)
    if (chica.isTouching(pizza)) {
      pizza.visible = false;
      pizza.x = 500;
      pizza.velocityY = 0;
      pizza.velocityX = 0;
      score = score + 1;
    }
  }

  drawSprites();
  math();
  if (keyDown("enter")) {
    checkAnswer(score);
  }

  if (keyDown("r")) {
    resetPizza();
  }

}

function drawStart() {
  background("black");
  fill("white");
  text("Chica's Pizzeria🎩🐻🎤", 50, 30);
  drawSprite(start);
  textSize(30);
  text("Press enter to go on", 40, 375);
  if (keyDown("enter")) {
    start.destroy();
    screen = "instructions";
  }
}


function drawInstructions() {
  background("black");

  fill("white");
  textSize(25);
  text("Arrow Keys = Move around", 50, 100);
  textSize(50);
  text("   controls  ", 105, 50);
  textSize(25);
  text("Press 'spacebar' to go on", 60, 275);
  text("", 38, 306);
  textSize(19);
  text("collect the correct amount of pizza slices", 3, 328);
  text("use arrows to move  chica", 3, 350)
  drawSprite(instr);

  if (keyDown("space")) {
    instr.destroy();
    screen = "game";
    for (var i = 0; i < numpizza; i++) {
      pizza = slices.get(i)
      pizza.velocityX = random(1, 5);
      pizza.velocityY = random(1, 5);
    }

  }

}

function resetPizza() {
  for (var i = 0; i < numpizza; i++) {
    pizza = slices.get(i)
    pizza.x = random(0, 400);
    pizza.x = random(0, 400);
  }
  score = 0;
}

function generateQuestion(num) {
  numerator = Math.floor(random(1, num)); // Random numerator (1-10)
  answer = numerator;
}

function checkAnswer(userAnswer) {
  if (userAnswer === answer) {
    screen = "gameover";
  }
  numpizza = Math.floor(random(1, 11));
  generateQuestion(numpizza);
}

function math() {
  textSize(18);
  fill("red");
  textAlign(CENTER, CENTER);
  text(`Collected: ${score}`, 200, 100);
  textSize(25);
  text(`Collect ${numerator} / ${numpizza} pizza slices.`, width / 2, 150);
  text("press space to check answer", 3, 350)
  text("press r to reset")

}

function drawGameover () {
  background("red");
  gameover.visible = true;
  drawSprite(gameover);
  fill("white");
  textFont("Arial");
  strokeWeight(7);
  textSize(40);
  text("game over", 83, 43);
}


