function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
}  

function takeSnapshot(){
    save("espero-q-fique-bom-:).png")
}

function draw() {
    image(video, 230, 150, 220, 200);
    fill(0,128,0)
    stroke(0,128,0)
    rect(90,40,460,20)
    rect(90,420,460,20)
    rect(40,90,20,300)
    rect(580,90,20,300)
  }
  