
var car,wall;
var speed,weight;

function setup() {
  createCanvas(2000,400);
  speed=random(50,150);
  weight=random(400,1500);
  
  car=createSprite(50,200,20,20);
 // car.debug=true;
  car.velocityX=speed;
  wall=createSprite(1200,200,60,height/2);
 // wall.debug=true;
}

function draw() {
  background(255,255,255);  

if(wall.x-car.x<(car.width+wall.width)/2){
   
   car.velocityX=0;
   var deformation =0.5*weight*speed*speed/22509;

   if (deformation>180){

    car.shapeColor=color(0,0,300);       

   }
   if(deformation<180 && deformation>100 ){

    car.shapeColor=color(230,230,0);

   }

   if (deformation<100){

       car.shapeColor=color(0,250,0);

   }
   
   if(deformation<180){
 
    car.shapeColor=color(150,260,0);

   }

  }

  drawSprites();
}

