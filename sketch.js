var bgImg;
var shooter1Img,shooter2Img,shooter3Img;
var explosion,lose,win;
var shooter;
var zombieImg,zombie;
var heart_3Img,heart;
var heart_2Img,heart_1Img;
var BulletGroup,ZombieGroup;
 var life=3;






function preload(){

    bgImg = loadImage("./assets/bg.jpeg");
    shooter1Img = loadImage("./assets/shooter_1.png");
    shooter2Img = loadImage("./assets/shooter_2.png");
    shooter3Img = loadImage("./assets/shooter_3.png");
    explosion   = loadSound("./assets/explosion.mp3");
    lose        = loadSound("./assets/lose.mp3");
    win         = loadSound("./assets/win.mp3");
    zombieImg   = loadImage("./assets/zombie.png")
    heart_3Img = loadImage("./assets/heart_3.png");
    heart_2Img = loadImage("./assets/heart_2.png");
    heart_1Img = loadImage("./assets/heart_1.png");

    
}


function setup(){
    createCanvas(1000,700);
 
    shooter = createSprite(60,550,20,20);
    shooter.addImage(shooter1Img);
    shooter.scale=0.4

    heart = createSprite(750,50,70,20);
    heart.addImage(heart_3Img);
    heart.scale=0.5;
  
    ZombieGroup = new Group();
    BulletGroup = new Group();

}



function draw(){
background(bgImg)

if(keyDown(UP_ARROW)){
    shooter.velocityY=-5;
}

if(keyDown(DOWN_ARROW)){
    shooter.velocityY=5;
}

if(keyWentDown("space")){
    bullet = createSprite(50,shooter.y-30,20,10);
    bullet.velocityX = 20;
    BulletGroup.add(bullet);
    shooter.depth = bullet.depth;
    shooter.depth = bullet.depth+2;;
    shooter.addImage(shooter3Img);
    

}
else if(keyWentUp("space")){
    shooter.addImage(shooter1Img);
}



if(ZombieGroup.isTouching(BulletGroup)){
  for(var i =0 ; i<ZombieGroup.length ;i++){
      if(ZombieGroup[i].isTouching(BulletGroup)){
          ZombieGroup[i].destroy()
          BulletGroup.destroyEach()
      }
  }
}


if(ZombieGroup.isTouching(shooter)){
    for(var i=0; i<ZombieGroup.length;i++){
        if(ZombieGroup[i].isTouching(shooter)){
            ZombieGroup[i].destroy();
            life = life-1;
        }
    }

}

if(life === 2){
heart.addImage(heart_2Img);
}

if(life === 1){
    heart.addImage(heart_1Img);
}









spawnZombie();


drawSprites()
}

function spawnZombie(){

if(frameCount % 80 === 0){
    zombie = createSprite(600,165,10,40)
    zombie.y = Math.round(random(400,800));
    zombie.addImage(zombieImg);
    zombie.scale=0.20;
    zombie .velocityX=-5;
    ZombieGroup.add(zombie);
    

}




}