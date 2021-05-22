//Create variables here
var dog;
var dogimg;
var happydog;
var database;
var food;
var foodStock;

function preload()
{
	//load images here

  dogimg=loadImage("Dog.png");
  happydog=loadImage("happydog.png");

}

function setup() {
	createCanvas(500, 500);
  text("press UP_ARROW key to feed drago milk",250,40);

  database=firebase.database();

  foodStock=database.ref('food');
  foodStock.on("value",readStock);

  dog=createSprite(250,250,1,1);
  dog.addImage("image",dogimg);
  dog.scale=0.2;

}

function readStock(data){

  food=data.val();

}
function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1;
  }

  database.ref('/').update({
    food:x
  })

}

function draw() {  
  text("press UP_ARROW key to feed drago milk",250,40);

  background(46,139,87);
  text("press UP_ARROW key to feed drago milk",250,40);

  if(keyWentDown(UP_ARROW)){

writeStock(food);
dog.addImage("image",happydog);

  }
  text("press UP_ARROW key to feed drago milk",250,40);

  drawSprites();
  //add styles here
  text("press UP_ARROW key to feed drago milk",250,40);


}



