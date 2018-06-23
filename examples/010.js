// Repeat drawings with a for loop.

var spacing = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(238, 232, 213);

  fill(131, 148, 150);
  stroke(7, 54,  66);
  strokeWeight(2);

  noLoop();
}

function draw() {
  for (var x = 0; x < width; x += spacing) {
    line(x, 0, 0, height);
  }

  for (var y = 0; y < height; y += spacing) {
    line(0, y, width, height);
  }
}