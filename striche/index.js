class Linie{
	constructor(x_, y_, x2_, y2_, color_){
		this.x = x_
		this.y = y_
		this.x2 = x2_
		this.y2 = y2_
		this.c = color_
	}

	move(y2){
		this.y2 = y2
	}

	show(){
		line(this.x, this.y, this.x2, this.y2)
	}

	settings(){
		stroke(this.c)
		strokeWeight(5)
	}
}

let lines = []
let distance = 20
let number = 20

function setup() {
  createCanvas(720, 400);

  for(let i = 1; i < number; i++){
  	c = color(random(255), 60, 60)
  	let l = new Linie(0, i * distance, width, i * distance, c)
  	lines.push(l)
  }

  for(let line of lines){
  	line.settings()
  	line.show()
  }
}

function mousePressed() {
	background(255);
  	for(let line of lines){
  		let yoff = random(height)
  		line.move(yoff)
  		line.settings()
  		line.show()
 	}
  	// prevent default
  	return false;
}

function draw(){
	background(255);
  	for(let line of lines){
  		let yoff = random(height)
  		line.move(yoff)
  		line.settings()
  		line.show()
 	}
}