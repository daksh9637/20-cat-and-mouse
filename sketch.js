var cat , cat_running , catImage , catStanding
var mouse , mouseImage
var backGround






function preload() {
  cat_running = loadAnimation("images/cat2.png" , "images/cat3.png")
  catImage = loadAnimation("images/cat1.png")
  mouseImage = loadImage("images/mouse2.png")
  backGround = loadImage("images/garden.png")
  catStanding = loadAnimation("images/cat4.png")
  
  
  
  
    //load the images here
}

function setup(){
    createCanvas(1000,800);

    mouse = createSprite(300,600)
mouse.addImage("mouse" , mouseImage)
mouse.scale = 0.15


cat = createSprite(700,600)
cat.addAnimation("cat" , catImage)
cat.addAnimation("running", cat_running)
cat.addAnimation("sitting" , catStanding)
cat.scale = 0.15

cat.debug = true
mouse.debug  =true

//create tom and jerry sprites here

}

function draw() {

    background(backGround);

   if(cat.x - mouse.x<=cat.width/2 - mouse.width/2){
cat.changeAnimation("sitting" , catStanding)
cat.velocityX = 0
   }
   
   
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
    text(mouseX+","+mouseY,10,45)
}


function keyPressed(){

if(keyCode===LEFT_ARROW){
    cat.velocityX = -5
    cat.changeAnimation("running" , cat_running)
    
}




  //For moving and changing animation write code here


}

