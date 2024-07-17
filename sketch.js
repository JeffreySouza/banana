let bearImg;
let bananaImg;

function setup() {
	createCanvas(400, 400);
	colorMode(HSB);

	// Set angle mode so that atan2() returns angles in degrees
	angleMode(DEGREES);

	describe("Two eyes that follow the cursor.");
}

function preload() {
	bearImg = loadImage("./assets/bear.png");
	bananaImg = loadImage("./assets/banana.png");
}

function draw() {
	background("aqua");
	image(bearImg, -80, 200);

	// Draw left eye

	const leftX = 42;
	const leftY = 220;

	// Calculate angle between left eye and mouse
	const leftAngle = atan2(mouseY - leftY, mouseX - leftX);

	push();
	translate(leftX, leftY);
	fill(255);
	ellipse(0, 0, 35, 35);
	rotate(leftAngle);
	fill(0);
	ellipse(12.5, 0, 15, 15);
	pop();

	// Draw right eye

	const rightX = 94;
	const rightY = 220;

	// Calculate angle between right eye and angle
	const rightAngle = atan2(mouseY - rightY, mouseX - rightX);

	push();
	translate(rightX, rightY);
	fill(255);
	ellipse(0, 0, 35, 35);
	rotate(rightAngle);
	fill(0);
	ellipse(12.5, 0, 15, 15);
	pop();
	image(bananaImg, mouseX - 25, mouseY - 45, 50, 50);
}
