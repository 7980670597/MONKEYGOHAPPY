
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
   
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  
  
  

  
}


function draw() {
  background("lightgreen");
  stroke("black");
  textSize("20");
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate() )
  text("survival Time:"+ survivalTime,100,50);
  
  //
    
    
    if(keyDown("space")&& monkey.y >= 150) {
        monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY +0.8;
 
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX= -4;
  ground.x=ground.width/2;
  console.log(ground.x);
  

  foods();
  stone();
  
  monkey.collide(ground);
  
  drawSprites();

  
}

function foods(){

  if(World.frameCount% 80===0){
   banana = createSprite(350,200,20,20);
  banana.addImage(bananaImage)
  banana.velocityX = -4;
    banana.scale = 0.1;
    FoodGroup.add(banana);
}
 }

function stone(){
  if(World.frameCount% 300===0){
  obstacle = createSprite(400,330,20,20);
  obstacle.addImage(obstacleImage)
  obstacle.velocityX = -4;
    obstacle.scale = 0.1;
    obstacleGroup.add(obstacle);
}


}


