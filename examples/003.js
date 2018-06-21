var angle = 0.0;
var speed = 0.05;

var offset;
var scalar;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background("lightgray");

  offset = windowWidth/2;
  scalar = windowWidth/4;
}

function draw() {
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  ellipse(x, y, 200);
  angle += speed;
}

function keyPressed() {
	if (key == "S") save("screenshot.png");
}