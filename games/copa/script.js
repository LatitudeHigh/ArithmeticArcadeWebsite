let numeroAleatorio;
let botonAdivinar;
let mono, alien;
let copa, estrellas, star1, star2, star3, star4, star5;
let muestraMath;

var start = [copa];
var instruccionesSprites = [mono, alien];

var screen = "start";


var back, player1, player2, ball
var score1 = 0;
var score2 = 0;

var juegoSprites;
var leftEdge, rightEdge, topEdge, bottomEdge, edges;

let num1, num2, answer, userAnswer;
let score = 0;
let gameState = 'question'; // Estados: 'question' para preguntar, 'answer' para responder


function setup() {
  createCanvas(400, 400);

  back = createSprite(200, 200);
  back.addImage(loadImage("assets/back.png"));
  back.scale = 0.76;

  createEdgeSprites();

  player1 = createSprite(40, 200);
  player1.addImage(loadImage("assets/Goat.png"));
  player1.scale = 0.15;

  player2 = createSprite(370, 200);
  player2.addImage(loadImage("assets/Killian.png"));
  player2.scale = 0.15;

  ball = createSprite(200, 180);
  ball.addImage(loadImage("assets/ball.png"));
  ball.scale = 0.1;

  juegoSprites = [back, player1, player2, ball]

  mono = createSprite(270, 72);
  mono.addImage(loadImage("assets/mono0.png"));
  mono.scale = 0.1;
  alien = createSprite(270, 172);
  alien.addImage(loadImage("assets/alien0.png"));
  alien.scale = 0.1;

  copa = createSprite(180, 200);
  copa.scale = 0.5;
  copa.addImage(loadImage("assets/copa0.png"));

  star1 = createSprite(330, 200);
  star2 = createSprite(200, 40);
  star3 = createSprite(40, 200);
  star4 = createSprite(70, 80);
  star5 = createSprite(310, 70);
  estrellas = [star1, star2, star3, star4, star5];
  estrellas.forEach((s) => {
    s.addImage(loadImage("assets/star0.png"));
    s.scale = 0.5;
  });

  start = [copa];
  instruccionesSprites = [mono, alien];
  generateQuestion();
}

function Instrucciones() {
  background("skyblue");

  textSize(30);
  fill("black");
  text("Instrucciones", 120, 23);
  textSize(15);
  fill("white");
  rect(15, 30, 180, 90);
  rect(15, 130, 200, 90);
  rect(15, 230, 380, 80);
  fill("black");
  text("Mover arriba tecla W", 20, 50);
  text("Mover abajo tecla S", 20, 70);
  text("Player 1", 300, 80);
  text("Mover arrow key arriba ", 20, 150);
  text("Mover arrow key abajo", 20, 170);
  text("Player 2", 300, 180);
  text("Los jugadores deberan hacer gol en 2 minutos.", 20, 250);
  text("El que haga gol resolvera El problema de matematicas", 20, 270);
  text("si lo resuelve Bien su gol estara en El marcador ", 20, 290);
  fill("white");
  textSize(25);
  text(" C o p a   d e l     m u n d o", 60, 350);
  fill("black");
  text(" C o p a   d e l    m u n d o", 62, 350);
  text("Press B to continue", 68, 380);
  instruccionesSprites.forEach((s) => {
    drawSprite(s);
  });

  if (keyDown("b")) {
    screen = "juego";
  }

}

function draw() {
  if (screen == "start") {
    drawStart();
  } else if (screen == "instrucciones") {
    Instrucciones();
  } else if (screen == "juego") {
    drawjuego();
  }
}

function drawStart() {
  background("darkblue");
  estrellas.forEach((s) => s.rotationSpeed = 4);
  texto();
  start.forEach((s) => {
    drawSprite(s);
  });
  estrellas.forEach((s) => {
    drawSprite(s);
  });
  if (keyDown("space")) {
    screen = "instrucciones";
  }
}

function texto() {
  fill("white");
  textSize(50);
  text("del", 145, 125);
  text("Copa        Mundo", 10, 150);
  fill("black");
  text("del", 150, 125);
  text("Copa          Mundo", 15, 150);
  textSize(20);
  text("t o c a   s p a c e   p a r a   c o n t i n u a r", 25, 331);
  fill("white");
  text("t o c a   s p a c e   p a r a   c o n t i n u a r ", 29, 328);
}

function drawjuego() {
  background("green");

  juegoSprites.forEach((s) => {
    drawSprite(s);
  });

  if (muestraMath) {
    displayQuestion();
    displayAnswer();
  } else {
    startGame();
    player1controls();
    player2controls();
    goal();
    ballMove();
  }
  
  // anade texto para score1 y score2
  textSize(60);
  textAlign(CENTER, CENTER)
  fill("white");
  text(score1, 170, 40);
  text("-", 200, 40);
  text(score2, 230, 40);

}

function player1controls() {
  if (keyDown("w")) {
    player1.y = player1.y - 5;
  }
  if (keyDown("s")) {
    player1.y = player1.y + 5;
  }
}

function player2controls() {
  if (keyDown("up")) {
    player2.y = player2.y - 5;
  }
  if (keyDown("down")) {
    player2.y = player2.y + 5;
  }
}

function ballMove() {
  ball.bounceOff(player1);
  ball.bounceOff(player2);
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(rightEdge);
}

function goal() {
  if (ball.isTouching(leftEdge) && ball.y >= 91 && ball.y < 276) {
    resetBall();
    score2 = score2 + 1;
    muestraMath = true;
  }
  if (ball.isTouching(rightEdge) && ball.y >= 91 && ball.y < 276) {
    resetBall();
    score1 = score1 + 1;
    muestraMath = true;
  }
}

function resetBall() {
  ball.x = 200;
  ball.y = 180;
  ball.velocityX = 10;
  ball.velocityY = 10;
}

function startGame() {
  if (keyDown("space")) {
    ball.velocityX = random(10, 10);
    ball.velocityY = random(10, 10);
  }
}

function displayQuestion() {
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(18);
  text(`¿Cuánto es ${num1} x ${num2}?.`, width / 2, height / 2);
  text( "Presiona los numeros y 'Enter' para responder", width/2, height/2 + 20);
}

function displayAnswer() {
  text(`Tu respuesta: ${userAnswer}`, width / 2, height / 2 + 50);
}

function generateQuestion() {
  num1 = floor(random(1, 10));
  num2 = floor(random(1, 10));
  answer = num1 * num2;
  userAnswer = "";
}

function keyPressed() {
  if (keyCode === ENTER && screen == "juego") {
      verificarNumero();
  } else if (keyCode === BACKSPACE) {
      // Remove the last character from the answer variable
      userAnswer = userAnswer.substring(0, answer.length - 1);
    } else if (keyCode >= 48 && keyCode <= 57) {
      // Check if the pressed key is a number (keycodes 0-9) and add it to the answer
      const numberPressed = keyCode - 48; // Convert keyCode to the corresponding number
      userAnswer += numberPressed;
    }
}

function verificarNumero() {
  if (userAnswer == answer) {
    alert("¡Has adivinado el número!");
    muestraMath = false;
    generateQuestion();
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
  } else if (userAnswer  > answer) {
    alert("Demasiado alto, intenta un número más bajo.");
  } else {
    alert("Demasiado bajo, intenta un número más alto.");
  }
}