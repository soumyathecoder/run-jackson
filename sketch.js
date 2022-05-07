
function preload(){
  //pre-load images
  1=loadAnimation('Runner-1.png' , 'Runner-2.png');
}

function setup(){
  createCanvas(400,600);
  //create sprites here
}

function draw() {
  background('black');
  var jaxon= createSprite(195,334,20,50);
  jaxon.setAnimation ("1");
drawSprites ();
}
