let dotRadius = 100;
let nFrames = 500;
let xLine;
let yLine;

let circleRadius;
let nFrames2 = 500;
let xCirclle;
let yCirclle;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // xCircle = random(circleRadius,width-circleRadius);
  // yCircle = random(circleRadius,height-circleRadius);
  
  
}

function draw() {
  xCircle = mouseX;
  yCircle = mouseY;
  circleRadius = random(10,100);

  if( mouseX<width){
  LineDraw(100,200,100);
  LineDraw(100,200,60);
  
    LineDraw(mouseX,mouseY,60);


  LineDraw(mouseX,133,40);
      LineDraw(mouseX,800,30);


  LineDraw(400,600,70);

  LineDraw(mouseX,700,80);

  
//   for(i=0; i<width; i+=600){
//     for(y=0; y<height; y+=400){
//       circleDraw(i,y);
//     }
//   }
}
}
  

function LineDraw(xLine,yLine,dotRadius) {
  let timing = (frameCount)/nFrames;
  if(0<mouseX && mouseX<width && 0<mouseY && mouseY<height){
    for(a=0; a<TWO_PI*2; a+=1){
      let x = xLine - dotRadius*tan(a+timing);
      let y = yLine - dotRadius*cos(a*timing*0.001);
      strokeWeight(1);
      stroke(255);
      point(x,y);
    }
  }
  else{
    xLine = 0;
    yLine = 0;    
  }
}

function circleDraw() {
  let timing = (frameCount)/nFrames;
    for(a=0; a<360*PI; a+=1){
      let x = xCircle - circleRadius*sin(a*timing);
      let y = yCircle - circleRadius*cos(a*timing);
      strokeWeight(random(0.5,2));
      stroke(255);
      point(x,y);
}
}

function mousePressed() {
  circleDraw();
}