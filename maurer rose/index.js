let n = 7
let d = 29

function setup() {
  createCanvas(720, 400)
	angleMode(DEGREES)
}

function draw(){
	background(50)
	push()
	translate(width/4, height/2)
	noFill()
	strokeWeight(1)
	stroke(255)

	beginShape()
	for(let i = 0; i < 361; i++){
		let k = i * d
		let r = 150 * sin(n*k)
		let x = r * cos(k)
		let y = r * sin(k)
		vertex(x, y)
	}
	endShape(CLOSE)
	pop()

	push()
	translate(width - width/4, height/2)
	noFill()
	strokeWeight(1)
	stroke(255)

	beginShape()
	for(let i = 0; i < 361; i++){
		let k = i * d
		let r = 150 * sin(n*k)
		let x = r * cos(k)
		let y = r * sin(k)
		vertex(x, y)
	}
	endShape(CLOSE)
	pop()
}
