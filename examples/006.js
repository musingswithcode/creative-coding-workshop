// Exploring colors.

var gridSize = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  for (var x = 0; x < width; x += gridSize) {
    var color = map(x, 0, width, 0, 255);
    fill(color, 0, 0);
    rect(x, 0, gridSize, height);
  }
}