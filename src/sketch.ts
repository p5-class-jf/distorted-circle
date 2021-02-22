// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    N: 60,
    Download_Image: () => save(),
}
gui.add(params, "N", 0, 100, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    background(0)
    translate(width/2, height/2)
    noFill()
    stroke('white')
    strokeWeight(10)
    const radius = 0.4 * height
    beginShape()
    for (let i = 0; i < params.N; ++i) {
        const angle = i / params.N * TWO_PI
        vertex(radius * cos(angle), radius * sin(angle))
    }
    endShape(CLOSE)
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}