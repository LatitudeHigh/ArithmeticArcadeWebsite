//variables

//title screen
var forrest, playButton, raidersOfTheLostWig;

//instructions screen
var arrowButton;

//seed things
var barb;
var seedDoor, selectSeedDoor, seedWalkyBackground;
var seedStartScreen, seedPlayButton;
var door1, door2, door3, selectDoor1, selectDoor2, selectDoor3, seedRoomBackground;
var seed, seedHall, seedHallDoor;
var seedCount1, seedCount2, seedCount3, seedCount4;
var life1, life2, life3, life4, life5;
var lostLifeImg;
var seedHallLives = 4;
var bananaPeel;
var numSeedsCollected;
var seedWalkSceneW, seedWalkSceneH;
var seedHallSceneW, seedHallSceneH;
var insideGreenhouseSceneW, insideGreenhouseScreenH;
var greenhouseWalkySceneW, greenhouseWalkySceneH;
var endGreenhouseSceneW, endGreenhouseSceneH;
var tunnelSceneW, tunnelSceneH;

var screen;

let num1, num2, answer, choices;
let buttons = [];
let answerSelected = false;

//water game
var waterStartScreen, skyBackground, waterPlayButton;
var raindrop1, raindrop2, raindrop3, raindrop4, confetti, rain, pot;
var waterScore, group;
var waterSkyBackgroundImg, raindropImg;

//greenhouse
var greenhouseWalkyBackground, greenhouseDoor;
var insideGreenhouseShadow, insideGreenhouseNoShadow, greenhouseShadowRoom, redPot, bluePot, greenPot, purplePot, redPotPlant, bluePotPlant, greenPotPlant, purplePotPlant;
var bananaHall;

var waterMessage;

var bananaScore;

var greenhouseDoor;
var moodBoard;

//secret tunnel
var tunnel;
var rushHourGuys;

// fight screen
var fightBackground, pinkPlantEatImg, pinkPlantImg;
var pinkPlant;
let bananas = [];
let fightsWon = 0;

function preload() {
  lostLifeImg = loadImage("assets/deadheart.png");
  greenPotImg = loadImage("assets/greenpot.png");
  greenPotPlantImg = loadImage("assets/greenpotplant.png");
  redPotImg = loadImage("assets/redpot.png");
  redPotPlantImg = loadImage("assets/redpotplant.png");
  bluePotImg = loadImage("assets/bluepot.png");
  bluePotPlantImg = loadImage("assets/bluepotplant.png");
  purplePotImg = loadImage("assets/purplepot.png");
  purplePotPlantImg = loadImage("assets/purplepotplant.png");
  sproutLevelOneImg = loadImage("assets/sproutlevel1.png");
  sproutLevelTwoImg = loadImage("assets/sproutlevel2.png");
  raindropImg = loadImage("assets/raindrop.png");
  waterSkyBackgroundImg = loadImage("assets/skybackground.png");

  pinkPlantEatImg = loadImage("assets/PINKplanteat.gif");
  pinkPlantImg = loadImage("assets/notmovingpinkplanteat.png");
}

function setup() {
  createCanvas(600, 400);

  //title screen
  forrest = createSprite(280, 200);
  forrest.addImage(loadImage("assets/forrest.png"));

  playButton = createSprite(302, 302);
  playButton.addImage(loadImage("assets/actualrealplaybutton.png"));
  playButton.scale = 0.25;

  raidersOfTheLostWig = createSprite(310, 100);
  raidersOfTheLostWig.addImage(loadImage("assets/raidersofthelostwig.png"));
  raidersOfTheLostWig.scale = 0.85;


  //instructions screen
  arrowButton = createSprite(520, 340);
  arrowButton.addImage(loadImage("assets/arrowbutton.png"));
  arrowButton.scale = 0.3;

  //seed things
  seedWalkyBackground = createSprite(300, 200);
  seedWalkyBackground.addImage(loadImage("assets/seedroomwalkybg.png"));
  seedWalkyBackground.scale = 0.8;

  seedDoor = createSprite(500, 180);
  seedDoor.addImage(loadImage("assets/seeddoorwalky.png"));
  seedDoor.scale = 0.5;

  selectSeedDoor = createSprite(500, 100);
  selectSeedDoor.addImage(loadImage("assets/doorselect.png"));

  seedStartScreen = createSprite(340, 200);
  seedStartScreen.addImage(loadImage("assets/seedRoomStartScreen.png"));

  seedPlayButton = createSprite(340, 350);
  seedPlayButton.addImage(loadImage("assets/playButton.png"));
  seedPlayButton.scale = 1.2;
  seedPlayButton.debug = true;

  seedRoomBackground = createSprite(300, 240);
  seedRoomBackground.addImage(loadImage("assets/doorbackground.png"));
  seedRoomBackground.scale = 1.35;

  door1 = createSprite(80, 250);
  door1.addImage(loadImage("assets/door1.png"));

  door2 = createSprite(300, 241);
  door2.addImage(loadImage("assets/door2.png"));

  door3 = createSprite(530, 250);
  door3.addImage(loadImage("assets/door3.png"));

  selectDoor1 = createSprite(80, 130);
  selectDoor1.addImage(loadImage("assets/doorselect.png"));
  selectDoor1.scale = 0.7;

  selectDoor2 = createSprite(300, 110);
  selectDoor2.addImage(loadImage("assets/doorselect.png"));
  selectDoor2.scale = 0.7;

  selectDoor3 = createSprite(530, 130);
  selectDoor3.addImage(loadImage("assets/doorselect.png"));
  selectDoor3.scale = 0.7;

  seedHall = createSprite(100, 400);
  seedHall.addImage(loadImage("assets/seedhall.png"));
  seedHall.scale = 1;

  bananaHall = createSprite(100, 400);
  bananaHall.addImage(loadImage("assets/seedhall.png"));
  bananaHall.scale = 1;

  seedHallDoor = createSprite(104, 56);
  seedHallDoor.addImage(loadImage("assets/seedhalldoor.png"));

  seed = createSprite(104, 200);
  seed.addImage(loadImage("assets/seed.png"));
  seed.scale = 2;

  // to do

  bananaPeel = createSprite(300, 100);
  bananaPeel.addImage(loadImage("assets/bananaPeel.png"));

  numSeedsCollected = 0;

  seedCount1 = createSprite(20, 20);
  seedCount1.addImage(loadImage("assets/seed.png"));
  seedCount1.scale = 3;
  seedCount1.tint = "grey";

  seedCount2 = createSprite(40, 20);
  seedCount2.addImage(loadImage("assets/seed.png"));
  seedCount2.scale = 3;
  seedCount2.tint = "grey";

  seedCount3 = createSprite(60, 20);
  seedCount3.addImage(loadImage("assets/seed.png"));
  seedCount3.scale = 3;
  seedCount3.tint = "grey";

  seedCount4 = createSprite(80, 20);
  seedCount4.addImage(loadImage("assets/seed.png"));
  seedCount4.scale = 3;
  seedCount4.tint = "grey";

  //hearts
  life1 = createSprite(440, 30);
  life1.addImage(loadImage("assets/heart.png"));
  life1.scale = 2;

  life2 = createSprite(470, 30);
  life2.addImage(loadImage("assets/heart.png"));
  life2.scale = 2;

  life3 = createSprite(500, 30);
  life3.addImage(loadImage("assets/heart.png"));
  life3.scale = 2;

  life4 = createSprite(530, 30);
  life4.addImage(loadImage("assets/heart.png"));
  life4.scale = 2;

  life5 = createSprite(560, 30);
  life5.addImage(loadImage("assets/heart.png"));
  life5.scale = 2;

  //greenhouse stuffs
  greenhouseWalkyBackground = createSprite(350, 200);
  greenhouseWalkyBackground.addImage(loadImage("assets/greenhousewalky.png"));
  greenhouseWalkyBackground.scale = 1.1;

  greenhouseDoor = createSprite(357, 112);
  greenhouseDoor.addImage(loadImage("assets/greenhousehouse.png"));

  insideGreenhouseShadow = createSprite(200, 200);
  insideGreenhouseShadow.addImage(loadImage("assets/insidegreenhouseshadow.png"));

  greenhouseShadowRoom = createSprite(370, 50);
  greenhouseShadowRoom.addImage(loadImage("assets/greenhouseshadowroom.png"));
  greenhouseShadowRoom.scale = 1.7;

  insideGreenhouseNoShadow = createSprite(200, 200);
  insideGreenhouseNoShadow.addImage(loadImage("assets/insidegreenhouse.png"));
  insideGreenhouseNoShadow.scale = 2;


  redPot = createSprite(-99, 122);
  redPot.addImage(loadImage("assets/redpot.png"));
  redPot.scale = 1.5;

  greenPot = createSprite(13, 122);
  greenPot.addImage(loadImage("assets/greenpot.png"));
  greenPot.scale = 1.5;

  bluePot = createSprite(13, 205);
  bluePot.addImage(loadImage("assets/bluepot.png"));
  bluePot.scale = 1.5;

  purplePot = createSprite(-99, 205);
  purplePot.addImage(loadImage("assets/purplepot.png"));
  purplePot.scale = 1.5;

  redPotPlant = createSprite(-99, 122);
  redPotPlant.addImage(loadImage("assets/redpotplant.png"));

  greenPotPlant = createSprite(13, 122);
  greenPotPlant.addImage(loadImage("assets/greenpotplant.png"));

  bluePotPlant = createSprite(13, 205);
  bluePotPlant.addImage(loadImage("assets/bluepotplant.png"));

  purplePotPlant = createSprite(-99, 205);
  purplePotPlant.addImage(loadImage("assets/purplepotplant.png"));
  //water game
  skyBackground = createSprite(200, 250)
  skyBackground.addImage(waterSkyBackgroundImg);

  raindrop1 = createSprite(100, -280);
  raindrop1.addImage(raindropImg);
  raindrop1.velocityY = 5;
  raindrop1.scale = 2.4;

  raindrop2 = createSprite(200, -100);
  raindrop2.addImage(raindropImg);
  raindrop2.velocityY = 5;
  raindrop2.scale = 2.4;

  raindrop3 = createSprite(250, -360);
  raindrop3.addImage(raindropImg);
  raindrop3.velocityY = 5;
  raindrop3.scale = 2.4;

  raindrop4 = createSprite(300, -400);
  raindrop4.addImage(raindropImg);
  raindrop4.velocityY = 5;
  raindrop4.scale = 2.4;

  pot = createSprite(200, 410);
  pot.addImage(loadImage("assets/pot.png"));
  pot.scale = 4;

  insideGreenhouseDoor = createSprite(370, 20);
  insideGreenhouseDoor.addImage(loadImage("assets/greenhousedoor.png"));
  insideGreenhouseDoor.scale = 0.2;

  waterStartScreen = createSprite(340, 200);
  waterStartScreen.addImage(loadImage("assets/wateringhole.png"));

  waterPlayButton = createSprite(340, 350);
  waterPlayButton.addImage(loadImage("assets/playbuttonwawa.png"));
  waterPlayButton.debug = true;

  tunnel = createSprite(400, 0);
  tunnel.addImage(loadImage("assets/secrettunnelwalky.png"));

  // Create three item lanes
  for (let i = 0; i < 3; i++) {
    bananas.push(createSprite(width, height / 3 * (i + 0.5), 20, 20));
    bananas[i].shapeColor = color(0, 255, 0);
    bananas[i].addImage(loadImage("assets/bananaPeel.png"));
    bananas[i].scale = 0.4;
  }

  pinkPlant = createSprite(50, 200);
  pinkPlant.addAnimation('notMoving','assets/notmovingpinkplanteat.png');
  pinkPlant.addAnimation('moving','assets/PINKplanteat.gif');

  createWaterQuestion();

  fightBackground = createSprite(270, 170);
  fightBackground.addImage(loadImage("assets/fightbg.png"));
  fightBackground.scale = 3;

  moodBoard = createSprite(300, 170);
  moodBoard.addImage(loadImage("assets/moodboard.png"));
  moodBoard.scale = 0.87;

  rushHourGuys = createSprite(300, 180);
  rushHourGuys.addImage(loadImage("assets/rushhourguys.png"));
  rushHourGuys.scale = 0.8;


  barb = createSprite(10, 250);
  barb.addImage(loadImage("assets/barbsR.gif"));
  barb.scale = 1.5;

  screen = "start";
  newQuestion();

  waterScore = 0;
  bananaScore = 0;
  waterMessage = "";
}

function draw() {
  // move between screens
  if (screen == "start") {
    drawStartScreen();
  } else if (screen == "instructions") {
    drawInstructionsScreen();
  } else if (screen == "seedwalk") {
    drawSeedBackgroundScreen();
  } else if (screen == "seedstart") {
    drawSeedStartScreen();
  } else if (screen == "seed") { 
    drawSeedRoom();
  } else if (screen == "seedhall") { 
    drawSeedHall();
  } else if (screen == "bananahall") {
    drawBananaHall();
  } else if (screen == "greenhousewalky") {
    drawGreenhouseBackgroundScreen();
  } else if (screen == "insidegreenhouse") {
    drawInsideGreenhouse();
  } else if (screen == "waterstart") {
    drawWaterStartScreen();
  } else if (screen == "watergame") {
    drawWaterGame();
  } else if (screen == "congrats") {
    drawCongratsScreen();
  } else if (screen == "endgreenhouse") {
    drawEndGreenhouseScreen();
  } else if (screen == "secrettunnel") {
    drawSecretTunnel();
  } else if (screen == "fightscene") {
    drawFightScene();
  } else if (screen == "PARTAY") {
    drawPartayScreen();
  }
}

//draws title screen
function drawStartScreen() {
  //draws title screen sprites
  var startScreenSprites = [forrest, playButton, raidersOfTheLostWig];
  startScreenSprites.forEach((s) => drawSprite(s));

  //goes to instruction screen if you press play
  if (mousePressedOver(playButton)) {
    screen = "instructions";
  }
}

//draws matrix font instructions screen
function drawInstructionsScreen() {
  background("black");

  //draws instruction screen sprites
  var instructionScreenSprites = [arrowButton];
  instructionScreenSprites.forEach((s) => drawSprite(s));

  // writes matrix font
  fill("green");
  textSize(30);
  textFont("Courier New");
  text("You are Barbie. Your hair has", 20, 120);
  text("been stolen by the evil banana.", 20, 160);
  text("You need to find seeds and grow", 20, 200);
  text("your plants to defeat the evil", 20, 240);
  text("banana and get your hair back.", 20, 280);

  //go to next screen when arrow is clicked
  if (mousePressedOver(arrowButton)) {
    screen = "seedwalk";
    barb.x = 0;
    barb.y = 200;
  }
}

//draws scene where barbie finds seed room
function drawSeedBackgroundScreen() {
  background("black");
  seedWalkSceneH = 600;
  seedWalkSceneW = 800;

  //draws seed walky background sprites
  var seedBackgroundSprites = [seedWalkyBackground, seedDoor];
  // draw barb seperate so barbie moves in front of backround
  var seedPlayerSprites = [barb];

  //makes camera move
  camera.zoom = 1.2;
  camera.position.x = barb.position.x;
  camera.position.y = barb.position.y;
  // draw only seed room background sprites
  seedBackgroundSprites.forEach((s) => drawSprite(s)); 
  // draw barbie seperately so the camera works
  seedPlayerSprites.forEach((s) => drawSprite(s));
  
  //duh makes barbie move
  barbieMovement();

  //if barbie touches outside door to seed room, goes to seed start screen
  if (barb.isTouching(seedDoor)) {
    selectSeedDoor.visible = true;
    //text that tells you to press space to open door
    fill("black");
    textFont("Courier New");
    textSize(20);
    text("press space to open door", 300, 250);
    //goes to seed start screen if you press space
    if (keyDown("space")) {
      screen = "seedstart";
    }
  }
}

//draws seed room instructions screen
function drawSeedStartScreen() {
  createCanvas(700, 400);

  //draws seed start screen sprites
  var seedStartScreenSprites = [seedStartScreen, seedPlayButton];
  seedStartScreenSprites.forEach((s) => drawSprite(s));

  //press play on seed instruction screen, goes to seed room
  if (mousePressedOver(seedPlayButton)) {
    numSeedsCollected = 0;
    seedHallLives = 4;
    screen = "seed";
    barb.x = 300;
    barb.y = 400;
  }
}

//draws seed room with doors and everything
function drawSeedRoom() {
  createCanvas(600, 510);
  background("white");

  // draws seed room sprites
  var seedRoomSprites = [seedRoomBackground, seedCount1, seedCount2, seedCount3, seedCount4, life1, life2, life3, life4, door1, door2, door3, selectDoor1, selectDoor2, selectDoor3, barb];

  // so barbie can't climb up the walls
  if (barb.y < 325) {
    barb.y = 325;
  }

  // make seeds not grey when you collect them
  if (numSeedsCollected >= 1) {
    seedCount1.tint = null;
  }
  if (numSeedsCollected >= 2) {
    seedCount2.tint = null;
  }
  if (numSeedsCollected >= 3) {
    seedCount3.tint = null;
  }
  if (numSeedsCollected >= 4) {
    seedCount4.tint = null;
  }

  // make hearts go grey and then eject barbie from seed room when all hearts are grey
  if (seedHallLives == 3) {
    life4.addImage(lostLifeImg);
  }
  if (seedHallLives == 2) {
    life3.addImage(lostLifeImg);
  }
  if (seedHallLives == 1) {
    life2.addImage(lostLifeImg);
  }
  if (seedHallLives == 0) {
    life1.addImage(lostLifeImg);
  }
  if (seedHallLives < 0) {
    screen = "seedwalk";
  }
  
  seedRoomSprites.forEach((s) => drawSprite(s));

  //writes division question
  askQuestion();

  // obviously moves barbie
  barbieMovement();

  //barbie doors interactions
  //if barbie touches door
  if (barb.isTouching(door1)) {
    selectDoor1.visible = true; //shows select door
    if (keyWentDown("space")) { //if space is pressed
      if (checkAnswer(door1)) { //checks door answer
        if (numSeedsCollected >= 4) { //checks if you collected enough seeds
          screen = "greenhousewalky";
          barb.x = 10;
          barb.y = 200;
        } else { // if not enough seeds, go to seed hall
          screen = "seedhall";
          barbSeedHallSetPos();
        }
      } else { // if answer is incorrect, loses life, goes to wrong answer hallway with banana
        seedHallLives = seedHallLives - 1;
        screen = "bananahall";
      }
    }
  } else {
    //can't see select door if you aren't touching a door
    selectDoor1.visible = false;
  }

  //samesies as above
  if (barb.isTouching(door2)) {
    selectDoor2.visible = true;
    if (keyWentDown("space")) {
      if (checkAnswer(door2)) {
        if (numSeedsCollected >= 4) {
          screen = "greenhousewalky";
          barb.x = 10;
          barb.y = 200;
        } else {
          screen = "seedhall";
          barbSeedHallSetPos();
        }
      } else {
        seedHallLives = seedHallLives - 1;
        screen = "bananahall";
      }
    }
  } else {
    selectDoor2.visible = false;
  }

  //still samesies as above
  if (barb.isTouching(door3)) {
    selectDoor3.visible = true;
    if (keyWentDown("space")) {
      if (checkAnswer(door3)) {
        if (numSeedsCollected >= 4) {
          screen = "greenhousewalky";
          barb.x = 10;
          barb.y = 200;
        } else {
          screen = "seedhall";
          barbSeedHallSetPos();
        }
      } else {
        seedHallLives = seedHallLives - 1;
        screen = "bananahall";
      }
    }
  } else {
    selectDoor3.visible = false;
  }
}

//draws hallway where barbie collects seeds
function drawSeedHall() {
  background("black");
  seedHallSceneH = 800;
  seedHallSceneW = 200;
  
  //seed hall sprites
  var seedHallBackgroundSprites = [seedHall, seedHallDoor, seed, life1, life2, life3, life4, life5];
  //barbie seperate from background sprites
  var seedHallPlayerSprites = [barb];

  //makes camera move
  camera.position.x = barb.position.x;
  camera.position.y = barb.position.y;
  //draw background sprites
  seedHallBackgroundSprites.forEach((s) => drawSprite(s));
  //draw barbie
  seedHallPlayerSprites.forEach((s) => drawSprite(s));
  barbieMovement();

  //collects seeds, resets seed location, adds to seeds you already collected
  if (barb.isTouching(seed)) {
    resetSeed();
    seed.visible = false;
    numSeedsCollected = numSeedsCollected + 1;
  }

  // makes barbie go back to seed room if you touch door in seed hall
  if (barb.isTouching(seedHallDoor)) {
    screen = "seed";
    barb.x = 300;
    barb.y = 350;
    seed.visible = true;
    newQuestion();
  }
}

//function that makes background where barbie walks and finds greenhouse
function drawGreenhouseBackgroundScreen() {
  background("white");
  greenhouseWalkySceneW = 750;
  greenhouseWalkySceneH = 400;

  //draws greenhouse walky sprites
  var greenhouseBackgroundSprites = [greenhouseWalkyBackground, greenhouseDoor];
  var greenhousePlayerSprites = [barb];

  //makes camera move
  camera.zoom = 1.5;
  camera.position.x = barb.position.x;
  camera.position.y = barb.position.y;

  greenhouseBackgroundSprites.forEach((s) => drawSprite(s));
  greenhousePlayerSprites.forEach((s) => drawSprite(s));

  //makes barbie move with arrow keys
  barbieMovement();

  //if barbie touches door on outside greenhouse, goes inside greenhouse
  if (barb.isTouching(greenhouseDoor)) {
    fill("black");
    textSize(20);
    textFont("Courier New");
    text("press space to open door", 230, 260);
    if (keyDown("space")) {
      screen = "insidegreenhouse";
      barb.x = 110;
      barb.y = 500;
    }
  }
}

//function for inside of greenhouse
function drawInsideGreenhouse() {
  background("black");
  insideGreenhouseSceneW = 1000;
  insideGreenhouseScreenH = 1000;

  // draws greenhouse sprites
  var insideGreenhouseBackgroundSprites = [insideGreenhouseNoShadow, greenhouseShadowRoom, redPot, greenPot, bluePot, purplePot];
  var insideGreenhousePlayerSprites = [barb];

  //makes camera move
  camera.zoom = 1.3;
  camera.position.x = barb.position.x;
  camera.position.y = barb.position.y;

  insideGreenhouseBackgroundSprites.forEach((s) => drawSprite(s));
  insideGreenhousePlayerSprites.forEach((s) => drawSprite(s));
  barbieMovement();

  // text with instructions to touch pot and go to water game
  fill("black");
  textFont("Courier New");
  textSize(14);
  text("Touch pot to water plant", -130, 180);

  //makes so barbie can't go into shadow room before you finish with water game
  barb.collide(greenhouseShadowRoom);

  //goes to water start screen if you touch a pot
  if (barb.isTouching(bluePot)) {
    screen = "waterstart";
  }
  if (barb.isTouching(redPot)) {
    screen = "waterstart";
  }
  if (barb.isTouching(greenPot)) {
    screen = "waterstart";
  }
  if (barb.isTouching(purplePot)) {
    screen = "waterstart";
  }

}

//draws start screen for water game with instructions
function drawWaterStartScreen() {
  createCanvas(680, 400);

  // draws water screen sprites
  var waterScreenSprites = [waterStartScreen, waterPlayButton];
  waterScreenSprites.forEach((s) => drawSprite(s));


  //if you press space, goes to water game 
  if (keyDown("space")) {
    screen = "watergame";
    createWaterQuestion();
  }
}

// function for water game with falling raindrops
function drawWaterGame() {
  createCanvas(400, 500);
  background("lightBlue");

  // draws water sprites
  var waterGameSprites = [skyBackground, raindrop1, raindrop2, raindrop3, raindrop4, pot];

  waterGameSprites.forEach((s) => drawSprite(s));

  // text with instructions for water game
  fill("white");
  textFont("Courier New");
  textAlign(CENTER, CENTER);
  textSize(16);
  text("Match the fraction with the decimal", 200, 50);

  // displays score
  text("Score: ", 40, 20);
  text(waterScore, 70, 20);

  text(waterMessage, 200, 100)

  //pot goes left and right with arrow keys
  if (keyDown("left")) {
    pot.x = pot.x - 7;
  }
  if (keyDown("right")) {
    pot.x = pot.x + 7;
  }
  
  // resets raindrops to top if they touch the bottom
  if (raindrop1.y > 410) {
    raindrop1.y = random(-20, 5);
    raindrop1.x = random(20, 380);
  }
  if (raindrop2.y > 410) {
    raindrop2.y = random(-20, 5);
    raindrop2.x = random(20, 380);
  }
  if (raindrop3.y > 410) {
    raindrop3.y = random(-20, 5);
    raindrop3.x = random(20, 380);
  }
  if (raindrop4.y > 410) {
    raindrop4.y = random(-20, 5);
    raindrop4.x = random(20, 380);
  }

  // resets raindrops if they touch pot, checks if fraction and decimal match
  if (raindrop1.isTouching(pot)) {
    checkWaterQuestion(raindrop1);
    raindrop1.y = random(-20, 5);
    raindrop1.x = random(20, 380);
  }

  if (raindrop2.isTouching(pot)) {
    checkWaterQuestion(raindrop2);
    raindrop2.y = random(-20, 5);
    raindrop2.x = random(20, 380);
  }

  if (raindrop3.isTouching(pot)) {
    checkWaterQuestion(raindrop3);
    raindrop3.y = random(-20, 5);
    raindrop3.x = random(20, 380);
  }

  if (raindrop4.isTouching(pot)) {
    checkWaterQuestion(raindrop4);
    raindrop4.y = random(-20, 5);
    raindrop4.x = random(20, 380);
  }

  //makes plant grow with water drops
  if (waterScore == 3) {
    pot.addImage(sproutLevelOneImg);
  }
  if (waterScore == 6) {
    pot.addImage(sproutLevelTwoImg);
  }
  if (waterScore >= 9) {
    screen = "congrats";
  }
}



//for if you get a question wrong in the seed room
function drawBananaHall() {
  background("black");
  var bananaHallSprites = [bananaPeel];
  bananaHallSprites.forEach((s) => drawSprite(s));


  //text that says you got the question wrong
  fill("green");
  textFont("Courier New");
  textSize(20);
  text("You got the question wrong,", 100, 240);
  text("The evil banana is gonna get you!!!", 100, 270)
  text("Press space to try again", 100, 300);

  
  //goes to seed room if you press space
  if (keyWentDown("space")) {
    screen = "seed";
  }

}

// draws greenhouse with door that you can walk through to get to secret tunnel
function drawEndGreenhouseScreen() {
  background("black");
  endGreenhouseSceneW = 800;
  endGreehouseSceneH = 800;

  //draws greenhouse sprites
  var endGreenhouseBackgroundSprites = [insideGreenhouseNoShadow, insideGreenhouseDoor, greenPotPlant, purplePotPlant, redPotPlant, bluePotPlant];
  var endGreenhousePlayerSprites = [barb];

  //makes camera move
  camera.zoom = 1.3;
  camera.position.x = barb.position.x;
  camera.position.y = barb.position.y;
  endGreenhouseBackgroundSprites.forEach((s) => drawSprite(s));
  endGreenhousePlayerSprites.forEach((s) => drawSprite(s));

  //gives barbie movement
  barbieMovement();

  // if barbie touches door in greenhouse, goes to secret tunnel
  if (barb.isTouching(insideGreenhouseDoor)) {
    fill("black");
    textFont("Courier New");
    textSize(12);
    text("press space to open door", 290, -24);
    if (keyDown("space")) {
      screen = "secrettunnel";
      barb.x = 80;
    }
  }
}

//draws secret tunnel that goes to the fight scene
function drawSecretTunnel() {
  background("black");
  tunnelSceneW = 800;
  tunnelSceneH = 400;
  
  //draws sprites
  var secretTunnelBackgroundSprites = [tunnel];
  var secretTunnelPlayerSprites = [barb];
  //makes camera
  camera.zoom = 2;
  camera.position.x = barb.position.x;
  camera.position.y = barb.position.y;
  secretTunnelBackgroundSprites.forEach((s) => drawSprite(s));
  secretTunnelPlayerSprites.forEach((s) => drawSprite(s));

  //lets barbie move with arrow keys
  barbieMovement();

  //makes barbie go to the fight scene if she walks off screen to the right
  if (barb.x > 600) {
    screen = "fightscene";
    barb.x = 200;
  }
}

//draws fight screen with bananas
function drawFightScene() {
  createCanvas(600, 380);
  background(220);

  //draws sprites
  var fightSceneSprites = [fightBackground, barb, pinkPlant];
  fightSceneSprites.forEach((s) => drawSprite(s));
  bananas.forEach((s) => drawSprite(s));

  // Move the player with arrow keys
  if (keyIsDown(UP_ARROW) && barb.position.y > barb.height / 2) {
    barb.position.y -= 5;
  }
  if (keyIsDown(DOWN_ARROW) && barb.position.y < height - barb.height / 2) {
    barb.position.y += 5;
  }
  // makes pink plant next to barbie
  pinkPlant.x = barb.x + 50;
  pinkPlant.y = barb.y;

  // Move and draw items
  for (let i = 0; i < bananas.length; i++) {
    bananas[i].position.x -= 5;

    // Reset item if it goes off-screen
    if (bananas[i].position.x < 0) {
      bananas[i].position.x = width;
    }

    // Check for collision with the player
    if (barb.overlap(bananas[i])) {
      bananas[i].position.x = width;
      bananaScore = bananaScore + 1;// Reset item if collected
    }


    // makes animation for pink plant
    if(pinkPlant.isTouching(bananas[i])){
      pinkPlant.changeAnimation('moving');
    } 
    
  }

  // text for score
  fill("black");
  textSize(25);
  text("Score:", 50, 50);
  text(bananaScore, 130, 50);

  text("Eat 10 bananas", 300, 50);

  // if barbie eats 10 bananas, goes to party screen
  if (bananaScore == 10) {
    screen = "PARTAY";
  }
}

// draws congrats screen that says you watered all your plants then goes back to greenhouse
function drawCongratsScreen() {
  createCanvas(600, 400);
  background("black");

  //text for congrats screen that tells you to go up the stairs
  fill("green");
  textFont("Courier New");
  textSize(20);
  text("Congratulations, you watered all your plants!", 30, 240);
  text("Go up the stairs in the greenhouse to continue.", 30, 270);
  text("Press space to go to the greenhouse", 30, 300);

  //goes back to greenhouse so you can go up stairs
  if (keyDown("space")) {
    screen = "endgreenhouse";
    barb.x = 120;
    barb.y = 300;
  }
}

//draws end party scene with mood board and rush hour guys
function drawPartayScreen() {
  createCanvas(600, 340);
  background("purple");
  
  //draws sprites
  var partaySprites = [moodBoard, rushHourGuys, barb];
  partaySprites.forEach((s) => drawSprite(s));

  //lets barbie move with arrow keys
  barbieMovement();

  //makes rush hour guys move if you press space
  if (keyDown("space")) {
    rushHourGuys.rotation = random(5, 80);
  }
}

//writes math question in seed room
function askQuestion() {
  textSize(48);
  textFont("Courier New");
  text(`${num1} ÷ ${num2} = ?`, 50, 90);
}

// generates math question for seed room
function newQuestion() {
  num2 = floor(random(2, 10)); // Generate a random number between 2 and 10
  answer = floor(random(2, 10)); // Generate a random number between 2 and 10
  num1 = num2 * answer; // Ensure that num1 is divisible by num2  

  var num = random(0, 1); // assigns num random value between 0 and 1
  // if num is less tha 0.3, door one is the right answer
  if (num < 0.3) {
    door1.text = answer;
    door2.text = floor(random(0, 10));
    door3.text = floor(random(0, 10));
    //if num is between 0.7 and 0.3, door 2 is the right answer
  } else if (0.7 > num > 0.3) {
    door2.text = answer;
    door1.text = floor(random(0, 10));
    door3.text = floor(random(0, 10));
    //if num is bigger than 0.7, door 3 is the right answer
  } else if (num > 0.7) {
    door3.text = answer;
    door2.text = floor(random(0, 10));
    door1.text = floor(random(0, 10));
  }

}
//if player goes through the door, barbie goes to seed hall
function ButtonClick(selectedAnswer) {
  if (selectedAnswer === answer) {
    screen = "seedhall";
  }
}
// checks if barbie picked the door with the correct answer
function checkAnswer(door) {
  if (parseInt(door.text) == answer) {
    return true;
  } else {
    return false;
  }
}

//resets seed in seed hall
function resetSeed() {
  seed.x = random(50, 150);
  seed.y = random(120, 400);
}

// sets barbie position in seed hall
function barbSeedHallSetPos() {
  barb.x = 100;
  barb.y = 600;
}
// writes fractions on the raindrops and decimal on the pot
function createWaterQuestion() {
// possible deciamls to put on pot
  var decimals = [0.5, 0.25, 0.75, 0.9];
// randomly picks decimal to put on pot
  decimal = decimals[Math.floor(random(0, decimals.length))];
// converts decimal to corresponding fraction
  fraction = decimalToFraction(decimal);
// write decimal on pot
  pot.text = decimal;
// draws raindrop sprites
  var raindrops = [raindrop1, raindrop2, raindrop3, raindrop4];
// loop through raindrops
  for (var i = 0; i < raindrops.length; i++) {
//check if decimal matches the one on pot
    if (decimals[i] == decimal) {
// if it matches, display corresponding fraction on raindrop
      raindrops[i].text = fraction;
    } else {
// if it doesn't match, convert the decimal to fraction and display  it on the raindrop
      raindrops[i].text = decimalToFraction(decimals[i]);
    }
  };
}

//checks if randrop text is correct
function checkWaterQuestion(raindrop) {
  if (raindrop.text == fraction) {
    createWaterQuestion(); // write new decimal on pot
    waterScore = waterScore + 1; //adds one to score
    waterMessage = "Correct!"; 
  } else {
    waterMessage = "womp womp... Try again!";
  }
}

function decimalToFraction(decimal) {
  // shows decimal with equivalent fractions
  if (decimal == 0.75) {
    return random(["3/4", "6/8", "75/100"]);
  }

  if (decimal == 0.5) {
    return random(["1/2", "3/6", "5/10"]);
  }

  if (decimal == 0.25) {
    return random(["1/4", "2/8", "25/100"]);
  }

  if (decimal == 0.9) {
    return random(["9/10", "18/20", "90/100"]);
  }

}

//checks answer on raindrop
function waterCheckAnswer(raindrop) {
  if (parseInt(raindrop.text) == answer) {
    return true;
  } else {
    return false;
  }
}

// barbie movement function
function barbieMovement() {

  //makes barbie go right
  if (keyDown("right")) {
    barb.x = barb.x + 4;
  }

  //makes barbie go left
  if (keyDown("left")) {
    barb.x = barb.x - 4;
  }

  //makes barbie go up
  if (keyDown("up")) {
    barb.y = barb.y - 4;
  }

  //makes barbie go down
  if (keyDown("down")) {
    barb.y = barb.y + 4;
  }

}

