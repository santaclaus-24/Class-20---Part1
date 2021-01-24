var rec1, rec2 ;

function setup() {

  createCanvas(1500,900);

  rec1 = createSprite(750,400,50, 50);
  rec1.shapeColor = "red"

  rec2 = createSprite(750,500,50,50);
  rec2.shapeColor = "red";
}

function draw() {

  background(0);
  
  rec2.x = World.mouseX;
  rec2.y = World.mouseY;

  if(rec2.x - rec1.x < rec1.width/2 + rec2.width/2 && 
    rec1.x - rec2.x < rec1.width/2 + rec2.width/2 && 
     rec2.y - rec1.y < rec1.height/2 + rec2.height/2 && 
      rec1.y - rec2.y < rec1.height/2 + rec2.height/2){

    rec1.shapeColor = "blue";
    rec2.shapeColor = "blue";
  }
else{
  rec1.shapeColor = "red";
  rec2.shapeColor = "red";
}


  
  drawSprites();
}