//Create variables here
var dog, happyDog, database, foodS, foodStock;
var Dog_png;
var db;
function preload()
{
  dog_png = loadImage("Dog.png");
  happyDog = loadImage("dogpng1.png");
  
}

function setup() {
  createCanvas(500, 500);

  //creating database
db = firebase.database()
  
  foodStock= database.ref('food');
  foodStock.on("value",readstock);
  
}

//functions to read values from DB
function readstock(data){
  foodS=data.val();
}

//function to write values in DB
function writeStock(x){

  if(x<0){
    x=0;
  }else{
    x=x-1;
  }


database.ref('/').update({
  food:x
})
}


function draw() {  

  
  background(46,139,86)

  if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog);
  }
  drawSprites();
  textsize()
  fill()
  stroke()
}




