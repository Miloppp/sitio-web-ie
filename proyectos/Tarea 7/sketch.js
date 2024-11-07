let pyramids = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  noStroke();


  let numPyramids = 10;
  let minDistance = 150;  // Distancia mínima entre pirámides
  while (pyramids.length < numPyramids) {
    let x = random(-400, 400);
    let z = random(-400, 400);
    let base = random(50, 150);
    let height = random(100, 200);
    let tooClose = false;

    // Verificar si alguna pirámide está muy cerca de la nueva posición
    for (let i = 0; i < pyramids.length; i++) {
      let p = pyramids[i];
      let d = dist(x, z, p.x, p.z);
      if (d < minDistance) {
        tooClose = true;
        break;
      }
    }

    // Si no hay pirámides cercanas, agregar la nueva
    if (!tooClose) {
      pyramids.push({ x: x, z: z, base: base, height: height });
    }
  }
}

function draw() {
  background(0);


  ambientLight(100, 100, 100);  
  directionalLight(255, 255, 255, 0.25, 0.25, -1);  

 
  rotateX(sin(frameCount / 300) * TWO_PI);
  rotateY(cos(frameCount / 300) * TWO_PI);
  translate(0, 0, sin(frameCount / 150) * 100);

  // Dibujar cada pirámide con su color
  for (let i = 0; i < pyramids.length; i++) {
    push();
    let p = pyramids[i];
    translate(p.x, 0, p.z);
    
    // Asignar un tono de verde a cada pirámide
    let greenValue = random(150, 255);  // Intensidad de verde entre 150 y 255
    ambientMaterial(0, greenValue, 0);  // Color verde (R=0, G=greenValue, B=0)
    
    drawPyramid(p.base, p.height);
    pop();
  }
}

// Función para dibujar una pirámide
function drawPyramid(base, height) {
  beginShape(TRIANGLES);

  // Base cuadrada
  vertex(-base / 2, 0, -base / 2);
  vertex(base / 2, 0, -base / 2);
  vertex(base / 2, 0, base / 2);

  vertex(base / 2, 0, base / 2);
  vertex(-base / 2, 0, base / 2);
  vertex(-base / 2, 0, -base / 2);

  // Lados de la pirámide
  vertex(-base / 2, 0, -base / 2);
  vertex(base / 2, 0, -base / 2);
  vertex(0, -height, 0);

  vertex(base / 2, 0, -base / 2);
  vertex(base / 2, 0, base / 2);
  vertex(0, -height, 0);

  vertex(base / 2, 0, base / 2);
  vertex(-base / 2, 0, base / 2);
  vertex(0, -height, 0);

  vertex(-base / 2, 0, base / 2);
  vertex(-base / 2, 0, -base / 2);
  vertex(0, -height, 0);

  endShape();
}
