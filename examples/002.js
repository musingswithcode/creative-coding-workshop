// Draw basic shapes.

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(238, 232, 213);

  // We'll set line and fill colors to mark
  // things look nicer. More on colors soon.
  fill(131, 148, 150);
  stroke(7, 54,	66);
  strokeWeight(2);

  // Draw a point at (x, y).
  point(200, 150);
  // Draw a line from (x1, y1, x2, y2).
  line(150, 250, 250, 250);

  // Draw a rectangle from (x, y) with
  // given width and height.
  rect(300, 100, 100, 75);
  // To make a square, set width and
  // height to the same value.
  rect(300, 200, 100, 100);

  // Draw a ellipse with center (x, y) with
  // given width and height.
  ellipse(500, 125, 100, 75);
  // To make a circle, set width and
  // height to the same value.
  ellipse(500, 250, 100, 100);
}