// Declare variables below 
var home, panda, next, key1, key2, key3, key4, enemy1, enemy2, enemy3, walls, score, instructions_screen, youWin, button, bamboo_forest, showMath;
var GameOver;

// this is where setup begins 
function setup() {

// this creates the size of the "canvas" being used for the game
// (the width and hight of the screen )
  createCanvas(400, 400);

// this create the panda sprite
  panda = createSprite(80, 330);
  panda.addImage(loadImage("assets/panda.png"));
  panda.scale = 1.5;

// this next button sprite 
  next = createSprite(360, 20);
  next.addImage(loadImage("assets/next.png"));
  next.scale = 0.08;

// this key1 sprite 
  key1 = createSprite(20, 130);
  key1.addImage(loadImage("assets/key.png"));

// this key2 sprite 
  key2 = createSprite(170, 320);
  key2.addImage(loadImage("assets/key.png"));

// this key3 sprite 
  key3 = createSprite(320, 105);
  key3.addImage(loadImage("assets/key.png"));

// this key4 sprite 
  key4 = createSprite(50, 50);
  key4.addImage(loadImage("assets/key.png"));

// this creates the score 
  score = 0;

  // this sayes that the math is currently not being shown 
  showMath = false;
  
  // all the variable names for the wall sprites
  var shortH1, shortH2, shortH3, shortH4, shortH5, shortH6, shortH7, shortH8, wallH1, wallH2, wallH3, shortV1, shortV2, shortV3, shortV4, shortV5, shortV6, shortV7, wallV1, wallV2, wallV3, wallV4, wallV5, wallV6, wallV7;

  // assigning images to the short Horizontal walls
  shortH1 = createSprite(225, 50);
  shortH1.addImage(loadImage("assets/short_wall_H.png"));

  shortH2 = createSprite(225, 50);
  shortH2.addImage(loadImage("assets/short_wall_H.png"));

  shortH3 = createSprite(325, 150);
  shortH3.addImage(loadImage("assets/short_wall_H.png"));

  shortH4 = createSprite(325, 200);
  shortH4.addImage(loadImage("assets/short_wall_H.png"));

  shortH5 = createSprite(75, 200);
  shortH5.addImage(loadImage("assets/short_wall_H.png"));

  shortH6 = createSprite(75, 250);
  shortH6.addImage(loadImage("assets/short_wall_H.png"));

  shortH7 = createSprite(225, 250);
  shortH7.addImage(loadImage("assets/short_wall_H.png"));

  shortH8 = createSprite(375, 300);
  shortH8.addImage(loadImage("assets/short_wall_H.png"));

  // assigning images to the Horizontal walls

  wallH1 = createSprite(50, 100);
  wallH1.addImage(loadImage("assets/wall_H.png"));

  wallH2 = createSprite(150, 150);
  wallH2.addImage(loadImage("assets/wall_H.png"));

  wallH3 = createSprite(200, 300);
  wallH3.addImage(loadImage("assets/wall_H.png"));

 // assigning images to the short vertical walls

  shortV1 = createSprite(100, 125);
  shortV1.addImage(loadImage("assets/short_wall_V.png"));

  shortV2 = createSprite(200, 25);
  shortV2.addImage(loadImage("assets/short_wall_V.png"));

  shortV3 = createSprite(250, 75);
  shortV3.addImage(loadImage("assets/short_wall_V.png"));

  shortV4 = createSprite(50, 225);
  shortV4.addImage(loadImage("assets/short_wall_V.png"));

  shortV5 = createSprite(50, 275);
  shortV5.addImage(loadImage("assets/short_wall_V.png"));

  shortV6 = createSprite(250, 225);
  shortV6.addImage(loadImage("assets/short_wall_V.png"));

  shortV7 = createSprite(250, 325);
  shortV7.addImage(loadImage("assets/short_wall_V.png"));

  // assigning images to the Vertical walls

  wallV1 = createSprite(350, 150);
  wallV1.addImage(loadImage("assets/wall_V.png"));

  wallV2 = createSprite(300, 100);
  wallV2.addImage(loadImage("assets/wall_V.png"));

  wallV3 = createSprite(100, 300);
  wallV3.addImage(loadImage("assets/wall_V.png"));

  wallV4 = createSprite(200, 200);
  wallV4.addImage(loadImage("assets/wall_V.png"));

  wallV5 = createSprite(150, 350);
  wallV5.addImage(loadImage("assets/wall_V.png"));

  wallV6 = createSprite(300, 300);
  wallV6.addImage(loadImage("assets/wall_V.png"));

  wallV7 = createSprite(350, 300);
  wallV7.addImage(loadImage("assets/wall_V.png"));

// this line creates the group
  walls = createGroup(); 

// this is another functin to make it so charicter can not go over the edges 
  createEdgeSprites();

  // these are all the wall sprites being added into the walls group 
  walls.add(shortH1);
  walls.add(shortH2);
  walls.add(shortH3);
  walls.add(shortH4);
  walls.add(shortH5);
  walls.add(shortH6);
  walls.add(shortH7);
  walls.add(shortH8);
  walls.add(wallH1);
  walls.add(wallH2);
  walls.add(wallH3);
  walls.add(shortV1);
  walls.add(shortV2);
  walls.add(shortV3);
  walls.add(shortV4);
  walls.add(shortV5);
  walls.add(shortV6);
  walls.add(shortV7);
  walls.add(wallV1);
  walls.add(wallV2);
  walls.add(wallV3);
  walls.add(wallV4);
  walls.add(wallV5);
  walls.add(wallV6);
  walls.add(wallV7);
  walls.add(topEdge);
  walls.add(bottomEdge);
  walls.add(leftEdge);
  walls.add(rightEdge);


  //emeny group 
  // enemy 1 
  enemy1 = createSprite(150, 0);
  enemy1.addImage(loadImage("assets/enemy.png"));
  enemy1.scale = 0.2;
  enemy1.velocityY = 4.5;

  // enemy 2
  enemy2 = createSprite(200, 400);
  enemy2.addImage(loadImage("assets/enemy.png"));
  enemy2.scale = 0.2;
  enemy2.velocityX = 4.5;

  // enemy 3
  enemy3 = createSprite(20, 170);
  enemy3.addImage(loadImage("assets/enemy.png"));
  enemy3.scale = 0.2;
  enemy3.velocityY = 4.5;

  // enemy 4
  enemy = createGroup();
  enemy.add(enemy1);
  enemy.add(enemy2);
  enemy.add(enemy3);
  

  // you win sectoin (in the end )
  bamboo = createSprite(200, 200);
  bamboo.addImage(loadImage("assets/bambooForest.png"));
  bamboo.visible = false;

  playAgain = createSprite(200, 250);
  playAgain.addImage(loadImage("assets/button.png"));
  playAgain.scale = 0.5;
  playAgain.visible = false;

  youWin = createSprite(200, 150);
  youWin.addImage(loadImage("assets/youWin.png"));
  youWin.scale = 0.5;
  youWin.visible = false;

  // Instructions screen
  home = createSprite(200, 200);
  home.addImage(loadImage('assets/instructions_screen.png'));
  home.scale = 1;
}

// draw loop (this is what user sees) 
function draw() {

// creates backround 
  drawBackground();

  if (!showMath) {
    userControls();
  }

  collectingKeys();
  openScreen();
  pandaReset();
  panda.collide(walls);
  panda.collide(enemy);
  enemy.bounceOff(walls);
  youHaveWon();// Check for key regeneration
  drawSprites();
}


// other functions here

// function background 
function drawBackground() {

  background(rgb(140, 16, 11));

}


// function user controlles
function userControls() {
  if (keyDown("right")) {
    panda.x = panda.x + 5;
  }

  if (keyDown("left")) {
    panda.x = panda.x - 5;
  }

  if (keyDown("up")) {
    panda.y = panda.y - 5;
  }

  if (keyDown("down")) {
    panda.y = panda.y + 5;
  }
}

// collect keys 
function collectingKeys() {
  if (panda.isTouching(key1)) {
    score = score + 1;
    key1.visible = false;
    showMath = true;
    generateFractionMathProblem();
    panda.x = key1.x + 35;
    panda.y = key1.y;
  }

  if (panda.isTouching(key2)) {
    score = score + 1;
    key2.visible = false;
    showMath = true;
    generateFractionMathProblem();
    panda.x = key2.x + 30;
    panda.y = key2.y;
  }

  if (panda.isTouching(key3)) {
    score = score + 1;
    key3.visible = false;
    showMath = true;
    generateFractionMathProblem();
    panda.x = 375;
    panda.y = key3.y;
  }
  if (panda.isTouching(key4)) {
    score = score + 1;
    key4.visible = false;
    showMath = true;
    generateFractionMathProblem();
    panda.x = key4.x + 30;
    panda.y = key4.y;
  }
}

// openscreen function 
function openScreen() {
  if (keyDown("space")) {
    // when "space" is pressed "home" is removed 
    home.remove();
  }
}

//resets the panda when it touches the enemy 
function pandaReset() {
  if (panda.isTouching(enemy)) {
    // this sets x,y cordents 
    panda.x = 80;
    panda.y = 330;

  }

}


// shows the you win screen
function youHaveWon() {
  if (score >= 4 && panda.overlap(next)) {
    // is the bamboo,playAgain,youWin visible 
    bamboo.visible = true;
    playAgain.visible = true;
    youWin.visible = true;
  
  }
}

function regenerateKeys() {
  // Regenerate keys at random positions
  key1.position(random(50, width - 50), random(50, height - 50));
  key2.position(random(50, width - 50), random(50, height - 50));
  key3.position(random(50, width - 50), random(50, height - 50));
  key4.position(random(50, width - 50), random(50, height - 50));

  // Add the keys back to the canvas
  key1.visible = true;
  key2.visible = true;
  key3.visible = true;
  key4.visible = true;
}


function generateFractionMathProblem() {
  // Display the fraction math problem to the user using HTML elements
  let numerator1 = Math.floor(Math.random() * 5) + 2;
  let numerator2 = Math.floor(Math.random() * 5) + 2;
  let commonDenominator = Math.floor(Math.random() * 9) + 2;
  let correctNumerator = numerator1 + numerator2;
  let correctDenominator = commonDenominator;

  // Explanation for the user
  let explanationDiv = createDiv(`🎋 Bamboo-tastic Problem: What is ${numerator1}/${commonDenominator} + ${numerator2}/${commonDenominator}?`);
  explanationDiv.position(10, height + 10);

  // Visual representation of the fractions
  let fractionVisualDiv = createDiv(`<div style="display: inline-block;">${numerator1}</div>/<div style="display: inline-block; border-top: 2px solid black; padding-top: 2px;">${commonDenominator}</div> + <div style="display: inline-block;">${numerator2}</div>/<div style="display: inline-block; border-top: 2px solid black; padding-top: 2px;">${commonDenominator}</div>`);
  fractionVisualDiv.position(10, height + 40);

  let answerInput = createInput(''); // Create a single input field for numerator and denominator
  answerInput.position(10, height + 90);

  let submitButton = createButton('Submit'); // Create a button to submit the answer
  submitButton.position(10, height + 120);
  submitButton.mousePressed(() => checkAnswer(answerInput.value(), correctNumerator, correctDenominator, explanationDiv, fractionVisualDiv));
}

function checkAnswer(userAnswer, correctNumerator, correctDenominator, explanationDiv, fractionVisualDiv) {
  // Split the user's answer into numerator and denominator
  let userParts = userAnswer.split('/');
  let userNumerator = parseInt(userParts[0]);
  let userDenominator = parseInt(userParts[1]);
// Check if the user's answer is correct and displays a message
  if (userNumerator === correctNumerator && userDenominator === correctDenominator) {
    alert("🎉 Hooray! You're a Panda Pro at Fractions! 🐼 Get ready for the next bamboo challenge!");
    showMath = false;
    // Remove the HTML elements after checking the answer
    explanationDiv.remove();
    fractionVisualDiv.remove();
    selectAll('input, button').forEach(el => el.remove());
  
  } else {
    // tells the user in a pop up to try again
    alert("Oops! That's not the bamboo-tastic answer. Give it another try! 🐾");
  }


}
// playAgain function 
function playAgain() {
  if ((button.overlap(mouseX, mouseY)))
    // if clicker (frogot the gmae) over button score = 0 
    score = 0;
  // key1,key2,kek3,key4 visible
    key1.visible = true;
    key2.visible = true;
    key3.visible = true;
    key4.visible = true;
  
}