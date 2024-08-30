var screen = "start";

var player, wall1, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25;
var walls;
var bush1, bush2, bush3;
var guard, guardfollow;
var key;
var score = 0;
var bushes = [];
var start;
var button;
var maze1;
var arrow;
var player;
var lucky;
var i;
var storyboard;
var youWinScreen;
var guardImg;
var winningscore = 3;

function preload() {
  guardImg = loadImage("assets/guard.gif");
}

function setup() {

  // start setup
  start = createSprite(200, 200);
  start.scale = .779;
  start.addImage(loadImage("assets/startbackround0.png"));
  button = createSprite(200, 304);
  button.addImage(loadImage("assets/startbutton0.png"));
  button.scale = 0.3;

  storyboard = createSprite(200, 200);
  storyboard.addImage(loadImage("assets/story.png"));
  // instruct setup
  maze1 = createSprite(200, 200);
  maze1.addImage(loadImage("assets/maze0.png"));
  maze1.scale = 1.5;
  arrow = createSprite(347, 215);
  arrow.addImage(loadImage("assets/arrows.png"));
  arrow.scale = .18;
  player = createSprite(30, 85);
  player.addImage(loadImage("assets/player.png"));
  person = createSprite(40, 50);
  person.addImage(loadImage("assets/player.png"));

  // bushes             
  bush1 = createSprite(350, 255);
  bush1.addImage(loadImage("assets/bush10.png"));
  bush1.scale = 0.16;
  bush2 = createSprite(50, 200);
  bush2.addImage(loadImage("assets/bush10.png"));
  bush2.scale = 0.16;
  bush3 = createSprite(220, 40);
  bush3.addImage(loadImage("assets/bush10.png"));
  bush3.scale = 0.16;
  person.scale = 0.9;
  guard = createSprite(50, 50);
  guard.addImage(guardImg);
  guard.addImage(loadImage("assets/guard.gif"));
  guard.scale = 0.12;
  guard.velocityX = 5;

  guardfollow = createSprite(10, 5);
  guardfollow.addImage(loadImage("assets/guard.gif"));
  guardfollow.scale = 0.08;
  guardfollow.velocityY = -1;

  wall1 = createSprite(120, 100, 100, 25);
  wall5 = createSprite(255, 10, 250, 25);
  wall6 = createSprite(350, 390, 250, 25);
  wall7 = createSprite(-10, 390, 250, 25);
  wall8 = createSprite(10, 200, 25, 400);
  wall9 = createSprite(390, 200, 25, 400);
  wall10 = createSprite(270, 50, 25, 80);
  wall11 = createSprite(307, 80, 95, 25);
  wall12 = createSprite(157, 150, 25, 90);
  wall13 = createSprite(219.5, 200, 150, 25);
  wall14 = createSprite(50, 250, 100, 25);
  wall15 = createSprite(190, 200, 25, 80);
  wall16 = createSprite(220, 200, 25, 25);
  wall17 = createSprite(400, 200, 25, 25);
  wall18 = createSprite(400, 200, 25, 25);
  wall19 = createSprite(400, 200, 25, 25);
  wall20 = createSprite(200, 330, 210, 25);
  wall21 = createSprite(100, 222, 25, 80);
  wall22 = createSprite(230, 400, 25, 150);
  wall23 = createSprite(200, 300, 25, 40);
  wall24 = createSprite(200, 200, 100, 25);
  wall25 = createSprite(200, 200, 100, 25);

  youWinScreen = createSprite(200, 200);
  youWinScreen.addImage(loadImage("assets/Youwin.png"));
  youWinScreen.visible = false;


  walls = createGroup();
  walls.add(wall1);
  walls.add(wall5);
  walls.add(wall6);
  walls.add(wall7);
  walls.add(wall8);
  walls.add(wall9);
  walls.add(wall10);
  walls.add(wall11);
  walls.add(wall12);
  walls.add(wall13);
  walls.add(wall14);
  walls.add(wall15);
  walls.add(wall16);
  walls.add(wall17);
  walls.add(wall18);
  walls.add(wall19);
  walls.add(wall20);
  walls.add(wall21);
  walls.add(wall22);
  walls.add(wall23);
  walls.add(wall24);
  walls.add(wall25);
  walls.setTintEach("darkGreen");

  resetMath();
}

function draw() {
  if (screen == "start") {
    drawStart();
  } else if (screen == "storyboard") {
    drawStoryBoard();
  } else if (screen == "instruct") {
    drawInstruct();
  } else if (screen == "game") {
    drawGame();
  } else if (screen == "youWin") {
    drawYouWin();
  }
}

// start code

function drawStart() {
  drawSprite(start);
  drawSprite(button);
  startBackground();
}
//makes the text and the start button 
function startBackground() {
  textSize(30);
  fill(rgb(205, 236, 255));
  text("A NIGHT AT THE MAZE", 40, 35);
  if (mousePressedOver(button)) {
    button.visible = false;
    start.visible = false;
    screen = "storyboard";
  }
}

// instructions code
function drawInstruct() {
  drawSprite(maze1);
  drawSprite(player);
  drawSprite(arrow);
  instructions();
  playerControls();

  if (keyDown("enter")) {
    maze1.visible = false;
    arrow.visible = false;
    player.visible = false;
    resetGuards();
    screen = "game";
  }
}

function drawStoryBoard() {
  background("white");
  var storyBoardSprites = [storyboard];
  storyBoardSprites.forEach((s) => drawSprite(s));

  if (keyDown("space")) {
    screen = "instruct";
  }
}
function drawYouWin() {
  background("white");
  youWinScreen.visible = true;
  guard.visible = false;
  guard.x = -100;
  guard.y = -100;
  guardfollow.visible = false;
  guardfollow.x = -100;
  guardfollow.y = -100;
  drawSprite(youWinScreen);
  fill("black");

  textSize(30);
  text("You Win!", 50, 150),
    text("Press Enter to Restart", 50, 40);
  if (keyDown("enter")) {
    restartGame()
  }
}

function instructions() {
  textSize(13);

  fill("white");
  text("To move press:", 302, 190);
  textSize(25);
  textFont("Times New Romen");
  fill("white");
  text("(press enter to start)", 16, 375);
textSize(15);
  fill("white");
  textFont("Times New Romen");
  text(("(In the next screen find the bush that has the right answer!!!)"), 16, 30);
}

function playerControls() {
  if (keyDown("right")) {
    player.x = player.x + 2;
  }
  if (keyDown("left")) {
    player.x = player.x - 2;
  }
  if (keyDown("up")) {
    player.y = player.y - 2;
  }
  if (keyDown("down")) {
    player.y = player.y + 2;
  }
}


function drawGame() {
  background("lightgreen");
  storyboard.visible = false;
  usercontrols();
  guardCatchesPerson();
  follow(guardfollow, person, 3);
  touchBush();
  drawSprites();
  drawMath();
  if (score >= winningscore) {
    guard.x = -400;
  }
  if (score >= 3 && person.y > 400) {
    screen = "youWin";
  }
  if (score >= winningscore) {
   textSize (20);
    text("hes gone... escape here!!", 40, 359);
  }
}

function usercontrols() {
  if (keyDown("up")) {
    person.y = person.y - 5;
  }
  if (keyDown("down")) {
    person.y = person.y + 5;
  }
  if (keyDown("left")) {
    person.x = person.x - 5;
  }
  if (keyDown("right")) {
    person.x = person.x + 5;
  }
  person.bounce(walls);
  guard.bounceOff(walls);
  guardfollow.bounceOff(walls);
}

function guardCatchesPerson() {
  if (person.isTouching(guard)) {
    person.x = 50;
    person.y = 50;
    score = 0;
  }

  if (person.isTouching(guardfollow)) {
    person.x = 50;
    person.y = 50;
    score = 0;
    resetGuards();
  }

}

function follow(follower, followed, velocity) {
  //the follower follows the followed at a constant velocity
  deltaX = followed.x - follower.x;
  deltaY = followed.y - follower.y;
  var followerAngle = Math.atan(deltaY / deltaX);
  if (deltaX < 0) {
    // the arctan assumes that the angle is in the first or 
    // fourth quadrants, so if it's in the second or third
    // (i.e. deltaX/cosign is negative) correct by adding PI
    followerAngle = followerAngle + Math.PI;
  }
  follower.velocityX = velocity * Math.cos(followerAngle);
  follower.velocityY = velocity * Math.sin(followerAngle);
}

function resetGuards() {
  guardfollow.x = 50;
  guardfollow.y = -100;
  guard.x = 150;
  guard.y = 350;
}

function touchBush() {
  if (person.isTouching(bush1)) {
    if (checkAnswer(bush1)) {
      person.x = 250;
      person.y = 300;
    }
  }

  if (person.isTouching(bush2)) {
    if (checkAnswer(bush2)) {
      person.x = 50;
      person.y = 150;
    }
  }

  if (person.isTouching(bush3)) {
    if (checkAnswer(bush3)) {
      person.x = 250;
      person.y = 100;
    }
  }

}

// math code

function checkAnswer(bush) {
  if (person.isTouching(bush) && parseInt(bush.text) == answer) {
    score = score + 1;
    resetMath();
    resetGuards();
    return true;
  }
}

function resetMath() {
  num1 = int(random(0, 10));
  num2 = int(random(1, 10));
  answer = num1 * num2;
  userAnswer = "";
  showFeedback = true;

  bushes = [bush1, bush2, bush3];
  var lucky = Math.floor(random(0, bushes.length));
  for (var i = 0; i < bushes.length; i++) {
    bushes[i].text = Math.floor(random(0, 100));
    if (i == lucky) {
      bushes[i].text = answer;
    }
  }

}

function drawMath() {
  textSize(24);
  fill(0);
  text(`Score: ${score}`, 20, 30);
  text(`${num1} * ${num2} =`, 20, 80);
  text(userAnswer, 160, 80);
}

function restartGame() {
    player.position.x = 30;
    player.position.y = 85;
    guard.position.x = 50;
    guard.position.y = 50;
    guardfollow.position.x = 10;
    guardfollow.position.y = 5;
    screen = "start";
    score = 0;
    youWinScreen.visible = false;
    storyboard.visible = true;
    button.visible = true;
    start.visible = true;
    maze1.visible = true;
    player.visible = true; 
    arrow.visible = true;
    guard.position.x = 150; 
    guard.position.y = 350;
    person.position.x = 50;
    person.position.y = 50;
    guardfollow.visible = true;
    guard.visible = true;
}

