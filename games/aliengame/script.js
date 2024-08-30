// Create variables up here.
// this makes the start screen 
var mushroom;
var spaceShipStart, alienStart1, alienStart2;
var spaceShip, alien1, alien2, alien3, alien4, alien5, lazer;
var screen = "start";
let num1, num2, answer, userAnswer;
let score = 0;
let aliens;
let healthScore = 0;


let aliengImg, alienbImg, spaceShipImg, laserImg;
//this makes the images show up
function preload() {
  aliengImg = loadImage("assets/alieng.png");
  alienbImg = loadImage("assets/alienb.png");
  spaceshipImg = loadImage("assets/spaceship.png");
  laserImg = loadImage("assets/lazer0.png");
  startShipImg = loadImage("assets/ship0.png");
  startAlienImg = loadImage("assets/silly0.png");
}
//this creates and adds the aliens
function setup() {
  createCanvas(400, 400);

  alienStart1 = createSprite(55, 129);
  alienStart1.addImage(startAlienImg);
  alienStart1.scale = 0.3;
  spaceShipStart = createSprite(200, 265);
  spaceShipStart.addImage(startShipImg);
  spaceShipStart.scale = 0.4;

  spaceShip = createSprite(200, 370);
  spaceShip.addImage(spaceshipImg);
  spaceShip.scale = 0.3;

  alien1 = createSprite(60, 80);
  alien1.addImage(alienbImg);
  alien1.scale = 0.5;

  alien2 = createSprite(100, 200);
  alien2.addImage(aliengImg);
  alien2.scale = 0.5;

  alien3 = createSprite(340, 90);
  alien3.addImage(alienbImg)
  alien3.scale = 0.5;

  alien4 = createSprite(200, 75);
  alien4.addImage(aliengImg)
  alien4.scale = 0.5;

  alien5 = createSprite(240, 200);
  alien5.addImage(alienbImg)
  alien5.scale = 0.5;
  aliens = createGroup();
  aliens.add(alien1);
  aliens.add(alien2);
  aliens.add(alien3);
  aliens.add(alien4);
  aliens.add(alien5);
  for (var i = 0; i < 5; i++) {
    var alien = aliens.get(i);
    alien.velocityY = random(3, 5);
  }

  lazer = createSprite(200, 200);
  lazer.addImage(laserImg);
  lazer.scale = 0.5;
  lazer.visible = false;

  createEdgeSprites();
  newMathProblem();
  // Add all code that creates sprites, adds animations etc. here.
}

function draw() {
  if (screen == "start") {
    drawIntro();
  } else if (screen == "game") {
    drawGame();
  } else if (screen == "end") {
    drawEnd();
  }
}

// This is the draw loop.
function drawGame() {
  drawBackground();
  spaceShipControl();
  enemyControl();
  lazerControls();
  enemyTouchesSpaceShip();
  drawSprites();
  drawMath();
}

function drawMath() {
  textAlign(CENTER, CENTER);
  textSize(32);
  text(`${num1} * ${num2} = ?`, width / 2, height / 5);
  textSize(24);
  text(`Score: ${score}`, 20, 20);
}

//this makes the backround 
function drawBackground() {
  background("black");
  for (var i = 0; i < 12; i++) {
    drawStar();
  }
}
// this makes the score and health bar
function enemyTouchesSpaceShip() {

  if (alien1.isTouching(spaceShip)) {
    healthScore = healthScore - 1;
  }
  if (alien2.isTouching(spaceShip)) {
    healthScore = healthScore - 1;
  }
  if (alien3.isTouching(spaceShip)) {
    healthScore = healthScore - 1;
  }
  if (alien4.isTouching(spaceShip)) {
    healthScore = healthScore - 1;
  }
}

//this makes the stars contorl
function drawStar() {
  fill("yellow");
  ellipse(random(0, 400), random(0, 400), 5, 5);
}

//makes the spaceship controls
function spaceShipControl() {
  if (keyDown("left")) {
    spaceShip.x = spaceShip.x - 20;
  }
  if (keyDown("right")) {
    spaceShip.x = spaceShip.x + 20;
  }
  spaceShip.bounceOff(rightEdge);
  spaceShip.bounceOff(leftEdge);
}

//the enemy controls 
function enemyControl() {
  for (var i = 0; i < 4; i++) {
    var alien = aliens.get(i);
    if (alien.y > 400) {
      alien.y = -110;
    }
  }
}
//makes the lazer controls
function lazerControls() {
  if (keyDown("space")) {
    lazer.visible = true;
    lazer.x = spaceShip.x;
    lazer.y = spaceShip.y;
    lazer.velocityY = -8;
  }
  // resets the lazer back to the bottom
  if (lazer.y < 0) {
    resetLazer();
  }

  for (var i = 0; i < 5; i++) {
    var alien = aliens.get(i);
    if (lazer.isTouching(alien)) {
      checkAnswer(alien);
      resetLazer();
    }
  }
}

function resetLazer() {
  lazer.visible = false;
  lazer.x = spaceShip.x;
  lazer.y = spaceShip.y;
  lazer.velocityY = 0;
}


function newMathProblem() {

  num1 = floor(random(1, 10));
  num2 = floor(random(1, 10));
  answer = num1 * num2;

  var lucky = Math.floor(random(0, 5));
  for (var i = 0; i < 5; i++) {
    var alien = aliens.get(i);
    alien.text = Math.ceil(random(0, 100));
    if (i == lucky) {
      console.log(lucky)
      alien.text = answer;
    }
  }

}

function checkAnswer(alien) {
  if (parseInt(alien.text) == answer) {
    score = score + 1;
    newMathProblem();
    resetAliens();
  }
}

function resetAliens() {
  for (var i = 0; i < 5; i++) {
    var alien = aliens.get(i);
    alien.x = random(0, 400);
    alien.y = random(-100, 0);
  }

}
//Background and text
function drawIntro() {
  background("Purple");
  fill("black");
  textSize(50);
  textFont("Georgia");
  text("Alien Game ", 76, 200);
  textSize(22);
  textFont("serif");
  fill("yellow");
  text("Attempt to destroy all the aliens by", 50, 20);
  text("answering the math equation correct", 50, 44);
  fill("white");
  text("press enter key to start,left and right key to", 15, 368);

  if (keyDown("enter")) {
    spaceShipStart.destroy();
    alienStart1.destroy();
    screen = "game";
  }

  text("move, press space bar to destroy the alien", 15, 390);
  //moves the spaceship
  if (mouseIsOver(spaceShip)) {
    spaceShip.rotation = random(1, 10);
  }

  drawSprite(spaceShipStart);
  drawSprite(alienStart1);
  drawSprite(alienStart2);
}
