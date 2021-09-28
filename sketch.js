// setup canvas, and listen for the window height and window width for reponsive canvas sizing
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255, 0, 200); // set the background color
}
  
//resize the canvas when the window is resized (i.e. fill the canvas to whatever window height the user has)
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function draw() {
    noStroke(); // no outlines on the shapes
    fill(0, 100, 0); // fill in the shape with this color
    circle(mouseX, mouseY, 24) // set the circle to follow the mouse x and y position, set radius of circle
}

// if user presses their mouse, draw the background color again (i.e., erase everything that was drawn)
function mousePressed() {
    background(255, 0, 200);
}