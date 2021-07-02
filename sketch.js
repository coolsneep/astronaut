
var framecounts = 0;
var spaceman;

function preload() {
  createCanvas(400,400);
  iss = loadImage("iss.png");
  bath = loadAnimation("bath1.png","bath2.png");
  sleep= loadImage("sleep.png");
  brush= loadImage("brush.png");
  gym= loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat= loadAnimation("eat1.png","eat2.png");
  drink= loadAnimation("drink1.png","drink2.png");
  move= loadAnimation("move.png","move1.png");
  spaceman = createSprite(200,200,10,10);
}
 function setup(){
spaceman.addImage("sleeping",sleep)
  spaceman.scale = 0.1;
  
 
}

function draw() {
 x = createEdgeSprites();
  spaceman.bounceOff(x);
  background(iss);  
  fill("white");
  text("Instructions:\nup arrow = brushing\ndown arrow = gyming\nleft arrow = eating\nright arrow = bathing\nm key = moving" ,270,100);

  if(keyDown("m") && framecounts + 100 < frameCount){
    spaceman.velocityX = Math.round(random(0,5));
    spaceman.velocityY = Math.round(random(0,5));
    framecounts = frameCount;
  
  }
  if(keyDown("UP_ARROW")){
    spaceman.velocityX =0;
    spaceman.velocityY = 0;
    spaceman.addImage("brushing",brush);
    spaceman.changeImage("brushing");
  }
  if(keyDown("Down_ARROW")){
    spaceman.velocityX =0;
    spaceman.velocityY = 0;
    spaceman.addAnimation("gyming",gym);
    spaceman.changeAnimation("gyming");
  }
  if(keyDown("RIGHT_ARROW")){
    spaceman.velocityX =0;
    spaceman.velocityY = 0;
    spaceman.addAnimation("bathing",bath);
    spaceman.changeAnimation("bathing");
  }
  if(keyDown("LEFT_ARROW")){
    spaceman.velocityX =0;
    spaceman.velocityY = 0;
    spaceman.addAnimation("eating",eat);
    spaceman.changeAnimation("eating");
  }
  drawSprites();
} 