var wall,thickness
var bullet,speed,weight



function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,83)
  
bullet=createSprite(50,200,50,50)
bullet.velocityX=speed;

bullet1=createSprite(50,150,50,50)
bullet1.velocityX=speed;

wall=createSprite(1500,200,60,height/2)


}

function draw() {
  background(255,255,255);  
  drawSprites();

if(wall.x-bullet.x < (bullet.width+wall.width)/2){
bullet.velocityX=0;
var deformation=0.5 * weight * speed * speed/22509;
}
if(deformation>180){
  wall.shapeColor=color(255,0,0)
}

if(deformation<180 && deformation>100){
bullet.shapeColor=color(230,230,0);
  }

if(deformation<100){
wall.shapeColor=color(0,255,0);
}
}

function hasCollided(Lbullet,Lwall){
bulletRightEdge=lbullet.x+lbullet.width
wallLeftEdge=lwall.x




}
