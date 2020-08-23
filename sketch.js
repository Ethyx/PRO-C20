var car, wall;
var speed, weight;
var deformation;
function setup()
{
    createCanvas(1600, 600);
    
    speed = random(55,90);
    
    weight = random(400, 1500);
    
    car = createSprite(50,200,50,50);
    
    wall = createSprite(1500,200,60,height/2);
    wall.shapeColor = rgb(80,80,80);
    
    car.velocityX = speed;
    
    deformation = 0.5*weight*speed*speed/22500;
}
function draw()
{
    background(0);     
    
if (car.collide(wall))
    {
        if (deformation < 100)
        {
            car.shapeColor = rgb(109,255,0);
        }
        if (deformation >= 100 && deformation <= 180)
        {
            car.shapeColor = "yellow";
        }
        if (deformation > 180)
        {
            car.shapeColor = "red";
        }
    }
    
    drawSprites();
}