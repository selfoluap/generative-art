let i = -1

const collatz = (n, sequence) => {
  //console.log(n)
  sequence.push(n)
  i += 1
  if(n == 1) {
    return n
  }
  if(n % 2 == 0){
    return collatz(n/2, sequence)
  }
  else{
    return collatz((n*3+1)/2, sequence)
  }
}

const runCollatz = (d, len, angle) => {
  for(let i = 1; i < d; i++){
    resetMatrix()
    translate(width/3, 0)
    let sequence = []
    collatz(i, sequence)
    const reversed = sequence.reverse()
    reversed.forEach((item) => {
      if(item % 2 == 0){
        rotate(-angle)
      }else{
        rotate(angle)
      }
      smooth()
      stroke(221, 232, 9, 10)
      line(0, 0, 0, len)
      translate(0, len)
    })
  }
}

function mousePressed() {
  saveCanvas("collatz", "jpg")
}

function setup() {
  createCanvas(1200, 600)
  background(2, 15, 36)
  angleMode(DEGREES)
  //runButton = createButton("Run the Collatz Conjecture")
  //runButton.position(10, height + 10)
  //saveButton = createButton("Save Frame")
  //saveButton.position(width-100, height + 10)
  //iterationSlider = createSlider(0, 1000, 100)
  //iterationSlider.position(400, height + 10)
  runCollatz(10000, 10, 15)
}

function draw(){
  //let d = iterationSlider.value()
}
