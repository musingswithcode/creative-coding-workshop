// Random walk.

var px, py;
var stepSize = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(238, 232, 213);

  fill(131, 148, 150);
  stroke(7, 54,  66);
  strokeWeight(2);

  px = width/2;
  py = height/2;
}

function draw() {
  x = px + map(random(1), 0, 1, -stepSize, stepSize);
  y = py + map(random(1), 0, 1, -stepSize, stepSize);

  line(px, py, x, y);

  px = x;
  py = y;
}