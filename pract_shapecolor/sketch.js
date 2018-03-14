function setup() {
	createCanvas(1024, 360);
}

function draw() {
	background(200);
	//console.log(mouseX);
	fill(100, 0, 0);
	stroke(255, 204, 0);
	strokeWeight(4);
	rect(512, 20, 60, 60);
	fill(0, 0, 0);
	stroke(1, 128, 0);
	strokeWeight(8);
	rect(512, 100, 75, 150);
	stroke(1, 128, 0);
	strokeWeight(3);
	fill(0, 0, 255);
	ellipse(512, 150, 100, 100);
	stroke(1, 128, 0);
	line(512, 100, 612, 150);
	// arc();
	// point();
}
