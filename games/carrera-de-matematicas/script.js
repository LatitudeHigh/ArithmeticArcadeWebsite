var rock1;
var cono;
var x;
var vidas;
var carro;
var nube1, nube2, nube3, nube4;
var carro1, carro2, carro3, estrella, inicio;
var fondo2, medalla, medalla2, trofeo;
var inicioSprites = [];
var juegoSprites = [];
var finalSprites = [];
var screen = "inicio";

function setup() {

  carro1 = createSprite(34, 24);
  carro1.addImage(loadImage("assets/fondo carro0.png"));
  carro1.rotation = 90;
  carro1.scale = 0.1;
  inicio = createSprite(200,200332);
  inicio.addImage(loadImage("assets/fondo0.png"));
  inicio.scale = 0.5;
  carro2 = createSprite(54, 347);
  carro2.addImage(loadImage("assets/carro20.png"));
  carro2.scale = 0.1;
  carro2.rotation = 90;
  carro3 = createSprite(308, 102);
  carro3.addImage(loadImage("assets/carro30.png"));
  carro3.scale = 0.1;
  carro3.rotation = 90;
  estrella = createSprite(200, 200);
  estrella.addImage(loadImage("assets/estrella0.png"));
  estrella.scale = 1;

  inicioSprites = [carro1, inicio, carro2, carro3, estrella];
  
  carro = createSprite(50, 260);
  carro.addImage(loadImage("assets/car0.png"));
  carro.scale = 0.5
  carro.rotation = 90;
  rock1 = createSprite(400, 150);
  rock1.addImage(loadImage("assets/rock0.png"));
  rock1.velocityX = -5;
  cono = createSprite(400, 225);
  cono.addImage(loadImage("assets/cono10.png"));
  cono.velocityX = -5;
  nube1 = createSprite(92, 55);
  nube1.addImage(loadImage("assets/nube0.png"));
  nube1.scale = 0.5;
  nube1.visible = false;
  
  nube2 = createSprite( 260, 75);
  nube2.addImage(loadImage("assets/nube0.png"));
  nube2.scale = 0.2;
  nube2.visible = false;
  
  nube3 = createSprite(300, 140);
  nube3.addImage(loadImage("assets/nube0.png"))
  nube3.scale = 0.2;
  nube3.visible = false; 
  
  nube4 = createSprite(225, 140); 
  nube4.addImage(loadImage("assets/nube0.png"));
  nube4.scale= 0.2;
  nube4.visible = false;

  fondo2 = createSprite(200, 200);
  fondo2.addImage(loadImage("assets/fondofinal0.png"));
  fondo2.scale = 1;
  medalla = createSprite(35, 48);
  medalla.addImage(loadImage("assets/medalla20.png"));
  medalla.scale = 0.2;
  medalla2 = createSprite(337, 324);
  medalla2.addImage(loadImage("assets/medalla20.png"));
  medalla2.scale = 0.2;
  trofeo = createSprite(200, 200);
  trofeo.addImage(loadImage("assets/trofeo0.png"));
  trofeo.scale = 0.5;
  
  x = 0;
  vidas = 3;
  juegoSprites = [carro, rock1, cono, nube1, nube2, nube3, nube4];  
  finalSprites= [fondo2, medalla, medalla2, trofeo]
}

function draw(){
  if(screen == "inicio"){
    drawInicio();
  } else if (screen == "juego"){
    drawGame();
  } else if (screen == "final"){
    drawFinal();
  }
}

function drawInicio(){
  inicioSprites.forEach(s => drawSprite(s));
  
  textSize(50);
  fill("black");
  text("start", 213, 356);
  textSize(60);
  text("carreras", 92, 99);
  text("De", 97, 167);
  text("Matematicas", 9, 225);
  textSize(50);
  text("2x3", 305, 56);
  text("5x7", 57, 291);
  text("10x3", 291, 291);

  if(mouseDown()){
    screen = "juego"
  }
}

function drawFinal() {
  finalSprites.forEach((s) => drawSprite(s));
  textSize(100);
  text("Fin", 116, 126);
  text("Del", 212, 185);
  text("Juego", 67, 280);
}

function drawGame() {
  x = x - 5;
  if (x < -300) {
    x = 0;
  }
  if (carro.isTouching(rock1)) {
    vidas = vidas - 1;
    rock1.x = 400;
    rock1.y = random(156, 322);
    nube1.visible = true;
  }

  if (carro.isTouching(cono)) {
    vidas = vidas - 1;
    cono.x = 400;
    cono.y = random(156, 322);
    if (nube1.visible == true) {
      nube2.visible = true;
      nube3.visible = true;
      nube4.visible = true;
    }
  }

  conoRegresando();
  piedraRegresando();
  fondo();
  usarControles();
  nubesControles();
  juegoSprites.forEach(s => drawSprite(s));

  if (nube1.visible) {
    ecuation();
  }

  if (nube2.visible) {
    text("20", 235, 85);
    text("54", 280, 150);
    text("45", 200, 150);
  }
}

function drawMath() {
  drawSprites();
  textSize(58);
  text("5x4=", 43, 78);
  textSize(20);

  if(nube2.visible){
    text("20", 199, 150);
  }
  if(nube3.visible){ 
    text("54", 145, 206);
  }
  if(nube4.visible){
    text("45", 244, 209);
  }
    
}

function ecuation() {
  textSize(35);
  text("5x4=", 60, 65);
}

function piedraRegresando() {
  if (rock1.x < 0) {
    rock1.x = 400;
    rock1.y = random(156, 322);
  }
}
function conoRegresando() {
    if (cono.x <0) {
      cono.x = 400;
      cono.y = random(156, 322);
    }
}

function nubesControles(){
  if(mousePressedOver(nube2)){
    screen = "final"
  }

  if(mousePressedOver(nube3)){
    nube3.visible = false;
  }

  if(mousePressedOver(nube4)){
    nube4.visible = false;
  }
}

function usarControles() {
  if (carro.y < 150) {
    carro.velocityY = 0
  }
  if (carro.y > 350) {
    carro.velocityY = 0
  }
  if (keyWentDown("left")) {
    carro.velocityX = -3;
  }
  if (keyWentDown("right")) {
    carro.velocityX = 3;
  }
  if (keyWentDown("up")) {
    carro.velocityY = -2;
  }
  if (keyWentDown("down")) {
    carro.velocityY = 2;
  }

}
function fondo() {
  background("aqua");
  noStroke();
  fill("green");
  rect(1, 100, 400, 400);
  fill("grey");
  rect(3, 150, 400, 200);
  fill("white");
  rect(x, 236, 100, 20);
  rect(x + 130, 236, 100, 20);
  rect(x + 260, 236, 100, 20);
  rect(x + 390, 236, 100, 20);
  rect(x + 520, 236, 100, 20);
  fill("yellow");
  ellipse(379, 17, 100, 100);

  fill("black");
  textSize(20);
  text("vidas: ", 10, 380);
  text(vidas, 60, 380);
}