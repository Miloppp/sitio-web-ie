function setup() {
  createCanvas(600, 600);
  noFill();
  angleMode(DEGREES); 
}

function draw() {
  background(0);

  // cantidad de círculos basada en la posición del mouse
  let density = map(mouseX, 0, width, 1, 4); 

  // Llama a la función para dibujar el patrón
  drawKaleidoscope(width / 2, height / 2, 100, density);
}

function drawKaleidoscope(x, y, r, density) {
  if (density <= 0) return; // Condición de parada

  // Genera un color aleatorio
  stroke(random(255), random(255), random(255));

  // Dibuja el círculo en múltiples ángulos
  for (let i = 0; i < 6; i++) {
    let angle = 60 * i; 
    let newX = x + cos(angle) * r;
    let newY = y + sin(angle) * r;

    // Dibuja el círculo
    ellipse(newX, newY, r * 2);
    
    // Llama a la función recursiva con la densidad decreciente
    drawKaleidoscope(newX, newY, r / 2, density - 1); 
  }
}
