// Expressive typography.

var x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);

  textSize(120);
  textAlign(CENTER);
  fill(7, 54, 66);

	x = width/2;
  y = height/2;
}

function draw() {
  background(238, 232, 213);

  var changeX = abs(mouseX - pmouseX);
  var changeY = abs(mouseY - pmouseY);

  if (changeX > 5 || changeY > 5) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
  text("JITTER", x, y);
}