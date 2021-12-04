var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor="orange"
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="orange"
}

function draw() {
  background(200,25,45);  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY 
   
  if (movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2  &&
    fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2  &&
    fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2 &&
    movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2
    
    ) {
    movingRect.shapeColor ="blue"
    fixedRect.shapeColor ="blue"
  }
    else{ 
      movingRect.shapeColor="orange"
      fixedRect.shapeColor="orange"


    }




  drawSprites();




}