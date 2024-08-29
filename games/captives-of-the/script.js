// First Scene 
var warning;
//Second scene 
var title;
//Third Scene 
var instructions;
// game sprites
var user;
var faceLeftImg;
var faceRightImg;


// fourth scene
var cell;
var Key;
var cellImg, cell2Img;

// fifth scene
var hallway;
var lock;
var goblin;
var hallwayImg, goblinImg;

// math
let num1, num2, answer, userAnswer;
var showMath;
let inp;
let correctAnswer;
let message = "";

//jumpscares
var poot;
var jeff;
var momo; 
let mySound1;

// game wide variables
var room;
var warningSprites, titleSprites, instuctionSprites, cellSprites, hallwaySprites, pootSprites;

//loading the images
function preload() {
  warningImg = loadImage("assets/Warning.png");
  titleImg = loadImage("assets/titlescreen.png");
  instructionsImg = loadImage(" assets/instructionsscreen.png");
  cellImg = loadImage("assets/cell.png");
  cell2Img = loadImage("assets/cell2.png");
  hallwayImg = loadImage("assets/jukegoblin.png");
  faceLeftImg = loadImage('assets/robloxFacinL.png');
  faceRightImg = loadImage('assets/robloxFacingR.png');
  goblinImg = loadImage("assets/goblinL.png");
  pootImg = loadImage("assets/pootlevato.png");
  jeffImg = loadImage("assets/Jeffthekiller.webp");
  momoImg = loadImage ("assets/momogirl.png");
  mySound1 = loadSound('jumpscaresound.mp3');
  
}

function setup() {
  createCanvas(1000, 700)

  //First Scene 
  title = createSprite(500,400);
  title.addImage(titleImg);
  title.scale = 3.5;
  

  //Second Scene 

  instructions = createSprite(500,300);
  instructions.addImage(instructionsImg);
  instructions.scale = 2.5;

  // Third Scene 
  warning = createSprite(500,340);
  warning.addImage(warningImg);
  warning.scale = 3;

  
  //User Scene

  user = createSprite(500, 600);
  user.addImage(loadImage('assets/roblox1.png'));
  user.scale = 2;

  // fourth scene
  cell = createSprite(500, 350);
  cell.addImage(cellImg);
  cell.scale = 2.5;
  Key = createSprite(280, 600);
  Key.addImage(loadImage('assets/Key0.png'));
  Key.scale = 0.9;

  // fifth scene
  hallway = createSprite(500, 350);
  hallway.addImage(hallwayImg);
  hallway.scale = 2.5;

  lock = createSprite(180, -500);
  lock.addImage(loadImage('assets/lock0.png'));

  goblin = createSprite(850, 1000);
  goblin.addImage(goblinImg);
  goblin.scale = 1.5;
  goblin.visible = false;

  //jumpscare
  momo= createSprite(500, 500);
  momo.addImage(momoImg);
  momo.scale = 1.5;

  jeff= createSprite(500, 500);
  jeff.addImage(jeffImg);
  jeff.scale = 1.5;

  poot= createSprite(500, 500);
  poot.addImage(pootImg);
  poot.scale = 1.5;

  generateQuestion();
  room = "title";

  //sprites in each room 
  warningSprites =[warning];
  titleSprites = [title];
  instructionsSprites = [instructions];
  cellSprites = [cell, Key, user];
  hallwaySprites = [hallway, lock, goblin, user];
  jumpscare1Sprites = [poot];
}

// This is the draw loop
function draw() {
  if(room == "title"){
    drawTitle();
  } else if (room == "instructions"){
    drawInstructions();
  } else if (room == "warning"){
    drawWarning();
  } else if (room == "cell") {
    drawCell();
  } else if (room == "hallway") {
    drawHallway();
  } else if (room == "poot") {
    drawPoot();
  }
}
// First Scene 
function drawTitle () {
  room = "title";
  background("black");

  titleSprites.forEach((s) => drawSprite(s));
  if (keyDown ("space") && room == "title"){
    room = "instructions";
  }
}

//Second Scene 
function drawInstructions() {
  room = "instructions";
  background("black");

  instructionsSprites.forEach((s) => drawSprite(s));
  
  if (keyDown("space")) {
    room = "warning";
  }
}
// Third scene 
function drawWarning() {
  room = "warning";
  background("black");

  warningSprites.forEach((s) => drawSprite(s));

  if (keyDown("space") && room == "warning"){
    room = "cell";
  }
}

//Fourth Scene 
function drawCell() {
  room = "cell";
  background("black");
  controlUser();

  cellSprites.forEach((s) => drawSprite(s));

  if (user.isTouching(Key)) {
    Key.destroy();
    cell.addImage(cell2Img);
    cell.scale = 2.30;
  }

  if (user.x >= 1000) {
    user.x = 0;
    lock.x = 500;
    lock.y = 500;
    room = "hallway";
  }

}

// Fifth Scene
function drawHallway() {
  controlUser();
  goblin.y= 599;

  hallwaySprites.forEach((s) => drawSprite(s));

  if (user.isTouching(lock)) {
    showMath = true;
    lock.destroy();
  }

  if (showMath == true) {
    drawMath();
  }

  if (user.isTouching(goblin)) {
    room = "poot";

  }

  // if (user.x > 400) {
    //   room = "tbd";
    // }
  }

// Jumpscare scene // sixth scene 
function drawPoot() {
  room = "poot";
  background("black");
  
  jumpscare1Sprites.forEach((s) => drawSprite(s));
}

// User controls 
function controlUser() {
  if (keyDown("left")) {
    user.x = user.x - 8;
    user.addImage(faceLeftImg);

  }
  if (keyDown("right")) {
    user.x = user.x + 8;
    user.addImage(faceRightImg);
  }
}
// Math question 
function generateQuestion() {
  num1 = floor(random(1, 10));
  num2 = floor(random(1, 10));
  answer = num1 * num2;
  userAnswer = '';
}
// Checking if math question is correct 
function checkAnswer() {
  if (parseInt(userAnswer) == answer) {
    goblin.visible = true;
    showMath = false;
  }
}

// Checks to see if pressed enter or backspace 
function keyPressed() {
  if (keyCode === ENTER) {
    checkAnswer();
  } else if (keyCode === BACKSPACE) {
    userAnswer = userAnswer.slice(0, -1);
  } else if (key >= '0' && key <= '9') {
    userAnswer += key;
  }
}

// Showing numbers and text for math question 
function drawMath() {
  console.log(userAnswer);
  // Display the message on the screen
  fill("white");
  textAlign(CENTER, CENTER);
  textSize(24);
  text(`${num1} * ${num2} = ?`, width / 2, height / 2 - 20);
  textSize(16);
  text("Type your answer and press Enter", width / 2, height / 2 + 30);
  text(userAnswer, width / 2, height / 2 + 60);
}






