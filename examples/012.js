// Patterns with repetition and randomness.

var gridSize = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(238, 232, 213);

  stroke(7, 54,  66);
  strokeWeight(2);

  noLoop();
}

function draw() {
  for (var y = 0; y < height; y += gridSize) {
    for (var x = 0; x < width; x += gridSize) {
      if (random(1) < 0.5) {
        line(x, y+gridSize, x+gridSize, y);
      } else {
        line(x, y, x+gridSize, y+gridSize);
      }
    }
  }
}