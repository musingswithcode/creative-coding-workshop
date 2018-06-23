// Using nested for loops.

var spacing = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(238, 232, 213);

  fill(131, 148, 150);
  noStroke();

  noLoop();
}

function draw() {
  for (var y = 0; y < height; y += spacing) {
    for (var x = 0; x < width; x += spacing) {
      ellipse(x, y, spacing);
    }
  }
}