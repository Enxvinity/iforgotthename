var PLAY = 1;
var END = 0;
var gameState = PLAY;
var background,backgroundImg;
var helicopter,helicopterImg;
var missileImg;
var ground,groundImg;
var cloudImg,gameOverImg;
var missileGroup,cloudsGroup;


function preload(){
backgroundImg=loadImage("background.png");
helicopterImg=loadImage("helicopter.png");
missileImg=loadImage("missile.png");
 groundImg=loadImage("ground.png"); 
 cloudImg=loadImage("cloud.png");
  gameOverImg=loadImage("gameOver.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);

  
helicopter=createSprite(70,100);
helicopter.addImage(helicopterImg);
helicopter.scale=0.3;
  
  gameOver=createSprite(300,250);
  gameOver.addImage(gameOverImg);
  

  missileGroup=new Group();
  cloudsGroup=new Group();
}

function draw() {
  background(backgroundImg);
  
  if(gameState===PLAY){
 
  helicopter.y=mouseY;
  gameOver.visible=false;  
  
  
   
  if(missileGroup.isTouching(helicopter)){
    helicopter.destroy();
   gameState = END; 
   
  }
    
  missile();
  spawnClouds();
  
  }else if(gameState===END){
          background(0)
          fill("yellow");
          textSize(30);
          text("GAME OVER",250,250);
    missile.velocityX=0;
    clouds.velocityX=0;
  }
  drawSprites();
}


function missile(){
 if(World.frameCount%80===0){
 var missile=createSprite(width-5,200,50,50);
  missile.addImage(missileImg);
  missile.scale=0.08; 
  missile.y=Math.round(random(10,350));
  missile.velocityX=-(8);
   
   missileGroup.add(missile);
  }
  
}

function spawnClouds(){
 
  if(frameCount % 60===0){
    var cloud=createSprite(width-5,300,50,50);
    cloud.addImage(cloudImg);
    cloud.scale=0.5;
    cloud.y=Math.round(random(100,220));
    cloud.velocityX=-5;
    cloud.lifetime=300;
    
    cloudsGroup.add(cloud);
  } 
}