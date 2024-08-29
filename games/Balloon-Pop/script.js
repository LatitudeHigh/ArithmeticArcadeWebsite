// Create variables up here.
var spikeY, balloon, coin, coin2, spikes1, spikes2, spikes3, spikes4, spikes5, spikes6, spikes, akabackground

let score = 0;
let question;
let answerInput;
let answerButton;
let answer;
var screen = "instruction"

function setup() {
  createCanvas(400, 400);

  // Example of how to add a sprite and animation.
  spikeY = 40;
  balloon = createSprite(200, 200);
  coin = createSprite(200, 200);
  coin2 = createSprite(200, 300);
  coin3 = createSprite(200, 400);
  spikes1 = createSprite(40, spikeY);
  spikes2 = createSprite(115, spikeY);
  spikes3 = createSprite(190, spikeY);
  spikes4 = createSprite(265, spikeY);
  spikes5 = createSprite(340, spikeY);
  spikes6 = createSprite(400, spikeY);

  var spikesList = [spikes1, spikes2, spikes3, spikes4, spikes5, spikes6];

  spikesList.forEach((s) => {
    s.addImage(loadImage("assets/spike0.png"));
  })
  coin.addImage(loadImage("assets/coin0.png"));
  coin.scale = 0.3;
  balloon.addImage(loadImage("assets/balloon0.png"));
  balloon.scale = 0.5;
  coin2.addImage(loadImage("assets/coin0.png"));
  coin2.scale = 0.3;
  coin3.addImage(loadImage("assets/coin0.png"));
  coin3.scale = 0.3;

  akabackground = createSprite(200, 200);
  akabackground.addImage(loadImage("assets/bg0.png"));

  createNewQuestion();

  spikes = createGroup();

  spikes.add(spikes1);
  spikes.add(spikes2);
  spikes.add(spikes3);
  spikes.add(spikes4);
  spikes.add(spikes5);
  spikes.add(spikes6);


  createEdgeSprites();
  spikes1.scale = 1.7;
  spikes2.scale = 1.7;
  spikes3.scale = 1.7;
  spikes4.scale = 1.7;
  spikes5.scale = 1.7;
  spikes6.scale = 1.7;
  // Add all code that creates sprites, adds  animations etc. here.
}

function draw() {
  if (screen == "start") {

  } else if (screen == "instruction") {
    drawSprite(akabackground);
    instructions();
  } else if (screen == "game") {
    drawGame();
  }
}
// This is the draw loop.
function drawGame() {
  background("blue");
  userControls();
  clouds();
  spikesInteraction();
  drawSprites();
  drawmath();
}

function spikesInteraction() {
  if (spikes.isTouching(balloon)) {
    balloon.y = 400;
    balloon.velocityY = -4;
  }
  spikes.displace(coin);
  spikes.displace(coin2);
  spikes.displace(coin3);
}

function userControls() {
  noStroke();
  fill("white");
  balloon.velocityY = balloon.velocityY - 0.1;
  if (keyDown("left")) {
    balloon.velocityX = -4;
  }
  if (keyDown("right")) {
    balloon.velocityX = 4;
  }
  if (keyDown("down")) {
    balloon.velocityY = 4;
  }
  if (keyDown("up")) {
    balloon.velocityY = -4;
  }

  if (balloon.isTouching(coin)) {
    checkAnswer(coin);
    coin.x = random(0, 130);
    coin.y = random(spikes1.y + 75, 400);
  }
  if (balloon.isTouching(coin2)) {
    checkAnswer(coin2);
    coin2.x = random(140, 260);
    coin2.y = random(spikes1.y + 75, 400);
  }

  if (balloon.isTouching(coin3)) {
    checkAnswer(coin3);
    coin3.x = random(270, 400);
    coin3.y = random(spikes1.y + 75, 400);
  }


  balloon.bounceOff(topEdge);
  balloon.bounceOff(leftEdge);
  balloon.bounceOff(rightEdge);

}

function moveSpikesDown() {
  var spikesList = [spikes1, spikes2, spikes3, spikes4, spikes5, spikes6];
  spikesList.forEach((s) => {
    s.velocityY = 0.3;
  })
}


// math functions

function drawmath() {
  textSize(36)
  text(question, 160, 100);
}

function createNewQuestion() {
  let num1 = floor(random(1, 10));
  answer = floor(random(1, 10));
  let num2 = answer * num1;


  coin.text = floor(random(1, 100));
  coin2.text = floor(random(1, 100));
  coin3.text = floor(random(1, 100));

  let lucky = random(0, 1);
  if (lucky < 0.3) {
    coin.text = answer;
  } else if (lucky < 0.6) {
    coin2.text = answer;
  } else {
    coin3.text = answer;
  }
  // Randomly choose between multiplication and subtraction

  question = `${num2} / ${num1}`;

}

function checkAnswer(item) {
  if (parseInt(item.text) == answer) {
    // Answer is correct! Do what you want here:
    score = score + 1;
    createNewQuestion();
  } else {
    //Answer is incorrect! Do what you want here:
    message = "Try again!"
    moveSpikesDown();
    moveCoinsDown();
    balloon.y = 400;
    balloon.velocityY = -4;
  }
}

function moveCoinsDown() {
  coin.y = random(spikes1.y + 75, 400);
  coin2.y = random(spikes1.y + 75, 400);
  coin3.y = random(spikes1.y + 75, 400);
}
//write instructions
function instructions() {
  textFont("Georgia");
  fill("black");
  textSize(20);
  text("INSTRUCTION SCREEN", 95, 30);
  text("BALLOON CONTROLS", 101, 87);
  text("Move the balloon with the arrow keys!", 16, 103);
  text("(But make sure to be careful of the", 16, 122);
  text("spikes)", 16, 139);
  textSize(22);
  text("MATH", 161, 158);
  textSize(20);
  text("there will be math questions on the screen", 16, 177);
  text("then you pick one of the five questions to", 16, 196);
  text("answer by moving your little balloon over", 16, 215);
  text("the question you choosed ", 16, 234);
  text("THE SPIKES", 139, 253);
  text("every time you make a mistake you will", 16, 269);
  text("get one more chance to enter the right", 16, 285);
  text("answer and if you get it wrong again", 16, 301);
  text("then the spikes will move a inch down", 16, 317);
  text("and lastly when the spikes get to the", 16, 333);
  text("bottom of the screen GAME OVER", 16, 350);
  if (keyWentDown("space")) {
    screen = "game";
    akabackground.visible = false
  }

}
function clouds() {
  ellipse(315, 230, 70, 45);
  ellipse(276, 245, 70, 45);
}