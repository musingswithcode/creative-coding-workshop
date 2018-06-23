// Animate a circle's radius.

var t = 0;

var minRadius = 10;
var maxRadius = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);

  fill(131, 148, 150);
  stroke(7, 54,  66);
  strokeWeight(2);
}

function draw() {
  background(238, 232, 213);

  var radius = map(sin(t), -1, 1, minRadius, maxRadius);
  ellipse(width/2, height/2, radius);

  t = t + 0.05;
}