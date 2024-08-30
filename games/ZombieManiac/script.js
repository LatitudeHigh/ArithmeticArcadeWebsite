var city, zombie, zombie2, player, health, shooting, score;
// 

function setup() {
  city = createSprite(200, 200);
  city.scale = 1;
  city.addImage(loadImage('assets/city0.png'));
  zombie = createSprite(400, 300);;
  zombie.addImage(loadImage("assets/zombie.png"));
  zombie.scale = 0.27;
  player = createSprite(70, 300);
  player.addImage(loadImage("assets/player.png"));
  player.scale = 0.40;
  health = 100;
  zombie2 = createSprite(417, 290);
  zombie2.addImage(loadImage("assets/zombie2.png"));
  zombie2.scale = 0.27;
  zombie3 = createSprite(417, 300);
  zombie3.addImage(loadImage("assets/zombie3.png")) 
  zombie3.scale = 0.27;
  shooting = createSprite(415, 200);
  shooting.addImage(loadImage("assets/shooting.png"));
  shooting.scale = 0.25;
  generateQuestion();

}
function draw() {
  background(255, 255, 255);
  drawSprites();
  userControls();
  zombie.velocityX = -1.5;
  if (zombie.x < 0) {
    zombie.x = 400;
    zombie2.velocityX = -1;
  }
  if (zombie2.x < 0) {
    zombie2.x = 400;
    zombie3.velocityX = -0.25;;
  }

  if (zombie.isTouching(player)) {
    health = health - 0.25;
  }
  if (zombie2.isTouching(player)) {
    health = health - 0.25;
  }
  if (zombie3.isTouching(player)) {
    health = health - 0.25;
  }
  if (keyDown("s")) {
    shooting.velocityX = 4;
    shooting.x = player.x;
    shooting.y = player.y - 15;
  }
  if (shooting.isTouching(zombie)) {
    score = score + 1;
    zombie.x = 400
    zombie2.x = 400

  }
  fill("red");
  textSize(20);
  text("Score:", 40, 50);
  fill("red");
  textSize(20);
  text("Health:", 300, 50);
  text(health, 300, 80);
  if (health < 0) {
    background("black");
    fill("red");
    textSize(50);
    text("Game Over!", 40, 200);
  }
  drawMath();
}


function userControls() {
  if (keyDown("left")) {
    player.x = player.x - 2
  }
  if (keyDown("right")) {
    player.x = player.x + 2
  }
  if (player.y < 140) {
    player.velocityY = 4;
  }
  if (player.y > 305) {
    player.velocityY = 0;
  }
  if (keyDown("space")) {
    player.velocityY = -4;
  }

}

function loop() {
  if (keyDown("space")) {
    player.velocityY = -11;
  }
  if (player.y < 100) {
    player.velocityY = 4;
  }
  if (player.y > 305) {
    player.velocityY = 0;
  }

  zombie.velocityX = -1.5;
  if (zombie.x < 0) {
    zombie.x = 400;
  }
  if (shooting.isTouching(zombie)) {
    score = score + 1;
    zombie.x = 400;
    zombie2.x = 400;
  }

}




function drawMath() {
  fill("red");
  textSize(24);
  text(question, 10, 80);
  text('Your Answer:', 10, 120);
  text(userAnswer, 150, 120);
}

function keyPressed() {
  if (keyCode >= 48 && keyCode <= 57) { // Check if the key pressed is a number
    userAnswer += key;
  } else if (keyCode === ENTER) {
    checkAnswer();
  } else if (keyCode === BACKSPACE) {
    userAnswer = userAnswer.slice(0, -1); // Remove the last character
  } else if (keyCode === 171) {
    userAnswer += "/"; // Remove the last character
  }
}

function generateQuestion() {
  // Generate random fractions
  numerator1 = floor(random(1, 10));
  denominator1 = floor(random(2, 10));
  numerator2 = floor(random(1, 10));
  denominator2 = floor(random(2, 10));

  // Create the question string
  question = `What is ${numerator1}/${denominator1} * ${numerator2}/${denominator2}?`;

  // Set up for user input
  userAnswer = '';
}

function checkAnswer() {
  const userFraction = parseFraction(userAnswer);
  const correctNumerator = numerator1 * numerator2;
  const correctDenominator = denominator1 * denominator2;

  if (userFraction && userFraction.numerator === correctNumerator && userFraction.denominator === correctDenominator) {
    score++;
  }

  generateQuestion();
}

function parseFraction(input) {
  const parts = input.split('/');
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    return {
      numerator: parseInt(parts[0]),
      denominator: parseInt(parts[1])
    };
  }
  return null;
}
