/*
https://vimeo.com/channels/learningp5js/138327558
*/
var circle = { //this makes the ellipse start from the top left corner
  x: 0,
  y: 0, 
  diameter: 100 //this is the size of the ellipse
};

function setup() {
  createCanvas(600, 400);  
}

function draw() {
  // background
  background("black");
  // ellipse
  fill(mouseY, mouseX, 200); //when the mouse move up and down on the y and x axis, the color change
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
  
  circle.x = circle.x + 0.5; //the speed of the ellipse moving
  circle.y = circle.y + 0.5;
}