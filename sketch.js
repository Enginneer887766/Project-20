var car, wall;
var speed, weight;
var deformation;


function setup() {
  createCanvas(1600,400);
 
  speed = random(55, 90);
  weight = random(400, 1500);
  car = createSprite(50,200,55,25);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  deformation = 0.5 * weight * speed * speed / 22500;
  car.velocityX = 10;
  
}

function draw() {
  if (car.x   - wall.x  < wall.width/2  + car.width/2
    && wall.x - car.x   < wall.width/2  + car.width/2
    && car.y  - wall.y  < wall.height/2 + car.height/2
    && wall.y - car.y   < wall.height/2 + car.height/2) {

car.velocityX = 0;

if (deformation > 180)
{
  car.shapeColor = "red"
}
if (deformation < 180 && deformation >100 )
{
  car.shapeColor = "yellow"
}
if (deformation < 100)
{
  car.shapeColor = "green"
}
  }
  background(255,255,255);  
  
  drawSprites();

}