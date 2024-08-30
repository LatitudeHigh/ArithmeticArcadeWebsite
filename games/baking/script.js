
// Create variables up here.
var player;
var target;
var target2;
var target3;
var goodCake;
var badCake
var score = 0;
var collected = 0;
var sock;
var lives;
var gameSprites;
var baker;
var cupcake1;
var cupcake2;
var title;
var baker;
var bigCake;
var cakes;
var startSprites;
var correctAnswer;
var item;
var sugarCollected = 0;
var eggCollected = 0;
var flourCollected = 0;
var cake, cupcake, donut, tinySugar, tinyEgg, tinyFlour;
var instructionsSprites = [];

var screen = "start";

function setup() {
  tinySugar = createSprite(25, 40);
  tinyEgg = createSprite(175, 40);
  tinyFlour = createSprite(325, 40);
  tinySugar.addImage(loadImage("assets/Sugar.png"));
  tinyEgg.addImage(loadImage("assets/Egg.png"));
  tinyFlour.addImage(loadImage("assets/Flour.png"));
  tinySugar.scale = 0.3;
  tinyEgg.scale = 0.3;
  tinyFlour.scale = 0.3;
  cupcake1 = createSprite(70, 310);
  player = createSprite(175, 550);
  player.scale = 0.5
  target = createSprite(50, 0);
  target.scale = 0.5
  target2 = createSprite(200, 0);
  target2.scale = 0.5;
  target3 = createSprite(350, 0);
  target3.scale = 0.5
  goodCake = createSprite(200, -500);
  badCake = createSprite(200, -500);
  badCake.addImage(loadImage("assets/badcake.png"));
  goodCake.addImage(loadImage("assets/goodcake.png"));
  score = 0;
  player.addImage(loadImage("assets/bowl.png"));
  target.addImage(loadImage("assets/Egg.png"));
  target2.addImage(loadImage("assets/Sugar.png"));
  target3.addImage(loadImage("assets/Flour.png"));
  target.velocityY = 3;
  target2.velocityY = 3;
  target3.velocityY = 3;
  sock = createSprite(200, -100);
  sock.scale = 0.5
  lives = 10;
  sock.addImage(loadImage("assets/Stinkysock.png"));
  cupcake1 = createSprite(70, 310);
  cupcake1.addImage(loadImage("assets/cupcake2.png "));
  cupcake1.scale = 0.2;

  cake = createSprite(269, 100);
  cake.addImage(loadImage("assets/cake.png"));
  cake.scale = 0.40;
  cupcake = createSprite(80, 280);
  cupcake.addImage(loadImage("assets/cupcake.png"));
  cupcake.scale = 0.50;
  donut = createSprite(280, 290);
  donut.addImage(loadImage("assets/donut.png"));
  donut.scale = 0.40;
  cupcake2 = createSprite(350, 85);
  cupcake2.addImage(loadImage("assets/cupcake3.png"));
  cupcake.scale = 0.2;
  cakes = createSprite(300, 280);
  cakes.addImage(loadImage("assets/cake2.png"));
  cakes.scale = 0.14;
  bigCake = createSprite(115, 45);
  bigCake.addImage(loadImage("assets/cakes.png"));
  bigCake.scale = 0.70;
  baker = createSprite(185, 240);
  baker.addImage(loadImage("assets/baker.png"));
  baker.scale = 0.45;
  title = createSprite(200, 200);
  title.addImage(loadImage("assets/title.png"));
  title.scale = 1;

  instuctionsSprites = [cake, cupcake, donut];
  startSprites = [cupcake1, cupcake2, bigCake, title, baker, cakes];
  gameSprites = [player, target, target2, target3, sock, goodCake, badCake, tinySugar, tinyFlour, tinyEgg];

  generateQuestion();
}

function draw() {
  if (screen == "start") {
    startScreen();
  } else if (screen == "instruct") {
    drawInstructions();
  } else if (screen == "game") {
    drawGame();
  }
}




function drawInstructions() {
  background("lightBlue");
  textSize(39);
  fill("blue");
  text("Instructions", 112, 30);
  textSize(34);
  text("You will need to catch the", 5, 100);
  text("ingredient in the bowl with ", 1, 150);
  text("the ingredient you think is", 15, 200);
  text("correct, use left and ", 35, 250);
  text("right arrow", 115, 300);
  textSize(18);
  text("Press space to continue ->", 165, 381);
  if (keyDown("space")) {
    screen = "game"
  }
  instructionsSprites.forEach((s) => drawSprite(s));
}

function drawGame() {
  createCanvas(400, 600);
  background("skyblue");
  controls();
  gameplay();
  chooseItem();
  fill("Black");
  textSize(24);
  text(":", 50, 40);
  text(":", 200, 40);
  text(":", 350, 40);
  fill("black");
  text(sugarCollected, 80, 40);
  text(eggCollected, 230, 40);
  text(flourCollected, 380, 40);
  textSize(24);
  text("Lives:", 310, 600);
  textSize(24);
  text(lives, 375, 600);
  drawMath();
  lose();
  win();
  gameSprites.forEach((s) => drawSprite(s));
}
// this function makes a lose screen
function lose() {
  if (lives <= 0) {
    background("lightpink");
    badCake.y = 200;
    player.visible = false;
    target.visible = false;
    target2.visible = false;
    target3.visible = false;
    sock.visible = false;
    sock.y = 1000;
    target.y = 1000;
    target2.y = 1000;
    target3.y = 1000;
    fill("black");
    textSize(40);
    text("Try Again", 200, 300);
  }
}
// this function contains all of the user controls 
function controls() {
  if (keyDown("left")) {
    player.x = player.x - 5;
  }
  if (keyDown("right")) {
    player.x = player.x + 5;
  }
  if (keyWentDown("space")) {
    checkAnswer();
  }

  if (keyWentDown("r")) {
    if (score < 1) {
      sugarCollected = 0;
    } else if (score < 2) {
      eggCollected = 0;
    } else if (score < 3) {
      flourCollected = 0;
    }
  }
}
// this function makesn a win screen when the user has answered all the questions correctly
function win() {
  if (score >= 3) {
    background("lightgreen");
    goodCake.y = 200;
    player.visible = false;
    target.visible = false;
    target2.visible = false;
    target3.visible = false;
    sock.visible = false;
    sock.velocityY = 0;
    target.y = 1000;
    target2.y = 1000;
    target3.y = 1000;
    sock.y = -50;
    textFont("Georiga");
    fill("black");
    textSize(40);
    text("You Win!!!", 120, 300);
  }
}
// this function contains all of the gameplay 
function gameplay() {
  // add math here;
  if (target.y > 600) {
    target.y = 0;
    target.x = random(50, 350);
  }
  if (player.isTouching(target) && score < 2) {
    target.y = 0;
    target.x = random(50, 350);
    eggCollected = eggCollected + 1;
  }
  if (target2.y > 600) {
    target2.y = 0;
    target2.x = random(50, 350);
  }
  if (player.isTouching(target2) && score < 1) {
    target2.y = 0;
    target2.x = random(50, 350);
    sugarCollected = sugarCollected + 1;
  }
  if (target3.y > 600) {
    target3.y = 0;
    target3.x = random(50, 350);
  }
  if (player.isTouching(target3) && score < 3) {
    target3.y = 0;
    target3.x = random(50, 350);
    flourCollected = flourCollected + 1;
  }

  sock.velocityY = 5;

  if (sock.y > 600) {
    sock.y = 0;
    sock.x = random(50, 350);
  }
  if (player.isTouching(sock)) {
    sock.y = 0;
    sock.x = random(50, 50);
    lives = lives - 1;
  }
}
// this function has all the contents for the start screen
function startScreen() {
  background("white");
  startSprites.forEach((s) => {
    drawSprite(s);
  });

  textSize(19);
  fill("black");
  text("Press Enter to continue ->", 170, 380);

  if (keyDown("enter")) {
    screen = "instruct";
  }
}

let num1, num2, answer, userAnswer;


function generateQuestion() {
  num2 = Math.floor(random(1, 6)); // Limit divisor to 1-5 for simplicity
  num1 = num2 * Math.floor(random(2, 11)); // Ensure a whole number result

  correctAnswer = num1 / num2; // Whole number result is guaranteed
  collected = 0;
}

function chooseItem() {
  if (score < 1) {
    item = "sugar";
  } else if (score < 2) {
    item = "eggs";
  } else if (score < 3) {
    item = "flour";
  }
}

function checkAnswer() {
  var collected;
  if (score < 1) {
    collected = sugarCollected;
  } else if (score < 2) {
    collected = eggCollected;
  } else if (score < 3) {
    collected = flourCollected;
  }


  if (collected == correctAnswer) {
    // Answer is correct! Do what you want here:
    score = score + 1;
    generateQuestion();
    message = "Good Job! Keep Baking!";
  } else {
    // Answer is incorrect! Do what you want here:
    lives = lives - 1;
    message = "Try again!"
    if (score < 1) {
      sugarCollected = 0;
    } else if (score < 2) {
      eggCollected = 0;
    } else if (score < 3) {
      flourCollected = 0;
    }
  }
}
// this function draws the math equation
function drawMath() {
  textSize(24);
  textFont('Georgia');
  textAlign(CENTER, CENTER);
  text(`Collect ${num1} ÷ ${num2} of ${item}.`, 200, 70);
  textSize(16);
  text(`press space to enter answer`, 200, 100);
  textSize(16);
  text(`press r to reset ingredients`, 200, 120);
  textSize(16);
}