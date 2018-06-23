// Drawing order.

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

  ellipse(350, 200, 300, 300);
  // The rect draws on top of the circle.
  rect(150, 150, 400, 100);
}