var player;
var goalie;
var goal1;
var goal2;
var start;
var goal;
var screen;
var soccerball;
var ball;
var screen = "start";
var screen = "game";
// this is to set all the vars 

let num1, num2, correctAnswer, userAnswer;
let score = 0;
var lives = 3;
// this is to set the score and lives

function setup() {
  player = createSprite(10, 270);
  player.addImage(loadImage("assets/player.png"));
  player.scale = 0.2;
  player.visible = false;

  ball = createSprite(10, 270);
  ball.addImage(loadImage("assets/soccerball.png"));
  ball.scale = 0.1;
  ball.visible = false;

  goalie = createSprite(305, 307);
  goalie.addImage(loadImage("assets/goalie.png"));
  goalie.scale = 0.2;
  goalie.velocityY = 5;
  goalie.visible = false;
  goal1 = createSprite(370, 370);
  goal1.addImage(loadImage("assets/goal.png"));
  goal1.scale = 0.3;
  goal1.visible = false;
  goal2 = createSprite(370, 250);
  goal2.addImage(loadImage("assets/goal.png"));
  goal2.scale = 0.3;
  goal2.visible = false;
  start = createSprite(200, 200);
  start.addImage(loadImage("assets/start button.png"));
  goalStart2 = createSprite(70, 320);
  goalStart2.scale = 0.4;
  goalStart2.addImage(loadImage("assets/star goal.png"));
  goalStart2.visible = false;
  goal = createSprite(330, 320);
  goal.addImage(loadImage("assets/start goal.png"));
  goal.scale = 0.4;
  goal.visible = false;

  askQuestion();

  soccerball = createSprite(118, 320);
  soccerball.addImage(loadImage("instruction soccerball.png"));
  soccerball.scale = 0.5;
  soccerball.rotation = 3;
  // this is to set the all the images and scales and rotations
}

function drawInstructions() {
  background("pink");
  textSize(43);
  fill("black");
  text("Instructions ", 97, 45); ds
  textSize(30);
  text("Use the arrow keys to move", 12, 100);
  text("the player and the ball", 50, 153);
  text("into the goal", 107, 206);
  drawSprites();
  if (keyDown("enter"))
    screen = "instructions"
  // this is to draw the instructions
}

function draw() {
  if (screen == "start") {
    drawStartScreen();
  } else if (screen == "game") {
    drawGame();
  } else if (screen == "instructions") {
    drawInstructions();
    // this is to draw the start screen
  }

}

// draw loop   code.org instructions screen
function checkAnswer(item) {
  if (parseInt(item.text) == correctAnswer) {
    //Answer is corrct! Do what you want here
    score = score + 1
    askQuestion();
  } else {
    // Answer is incorrect! Do what you want here:
    lives = lives - 1;
    message = "Try Again!"
  }
}

// shows the equation to the user 
function drawequation() {
  textSize(32);
  fill(0);
  text(`What is ${num1} * ${num2}?`, 10, 100);
  text(userAnswer, 10, 160);
}

// makes the question
// we do need
function askQuestion() {
  num1 = floor(random(1, 10));
  num2 = floor(random(1, 10));
  correctAnswer = num1 * num2;

  var r = random(0, 1);
  if (r < 0.5) {
    goal1.text = correctAnswer;
    goal2.text = floor(random(1, 100));
  } else {
    goal1.text = floor(random(1, 100));
    goal2.text = correctAnswer;
  }
  // this is to make the questions
}

function drawStartScreen() {
  start.visible = true;
  goal.visible = true;
  goalStart2.visible = true;
  background("black");
  drawstext();
  goal.rotation = Number(5, -5);
  goalStart2.rotation = Number(5, -5);
  drawSprites();
  if (keyDown("space")) {
    start.visible = false
    goal.visible = false;
    goalStart2.visible = false;
    screen = "InstructionScreen";
  }
  // this is to draw the start screen
}

function drawstext() {
  background("black");
  fill("white");
  textSize(50);
  text("Math", 146, 104);
  text("Penalty", 120, 52);
  fill("white");
  textSize(35);
  fill("White");
  textSize(30);
  text("Press Space bar to start", 32, 268);
}
// this is to draw the text of the start screen

function movegoalie() {
  if (goalie.y < 180) {
    goalie.velocityY = 5;
  }
  if (goalie.y > 400) {
    goalie.velocityY = -5;
  }
  drawSprites();
  // this is to make the goalie move
}



function drawGame() {
  goalie.visible = true
  player.visible = true
  goal1.visible = true
  goal2.visible = true
  ball.visible = true
  userControl();
  drawbackground();
  movegoalie();
  ballMoves();
  drawSprites();
  drawequation();
  fill("black");
  textSize(20);
  text("lives:", 280, 30);
  text (lives, 350, 30);
  
  fill("black");
  textSize(20);
  text("score:", 100, 30);
  text (score, 100, 30);
  // this is to draw the game
}


function drawbackground() {
  background("lightblue");
  fill("yellow");
  ellipse(10, 10, 150, 150);
  fill("green");
  rect(0, 180, 450, 450);
  // this is the draw the background of the game
}

function userControl() {
  if (keyDown("up")) {
    player.y = player.y - 2;
  }
  if (keyDown("down")) {
    player.y = player.y + 2;
  }
  if (keyDown("left")) {
    player.x = player.x - 2;
  }
  if (keyDown("right")) {
    player.x = player.x + 2;
  }

  player.displace(ball);
  if (keyDown("space")) {
    ball.velocityX = 5;
  }
  // this is to make the player move
}

function ballMoves(){
  if (ball.x > 400){
     ball.x = 10
     player.x = 10 
    ball.velocityX = 0
  }
  if (ball.isTouching(goalie)){
    ball.x = 10
    player.x = 10
    ball.velocityX = 0
  }
  if (ball.isTouching(goal1)){
    checkAnswer(goal1);
    ball.x = 10
    player.x = 10
    ball.velocityX = 0
  } 
  if (ball.isTouching(goal2)){
    checkAnswer(goal2);
    ball.x = 10
    player.x = 10
    ball.velocityX = 0
    // this is to make the ball move
  }
}
