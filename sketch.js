
function setup() {
  createCanvas(600, 400);
  background(220);
}

function draw() {
  noStroke();
  fill(random(0,255), random(0,255), random(0,255));
  ellipse(random(0,600),random(0,600),random(3,8) * 2);
}