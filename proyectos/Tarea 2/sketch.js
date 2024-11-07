let hues = []; 
let sizes = []; 
let x = []; 
let y = []; 
let speeds = []; 

function setup() {
  createCanvas(600, 400); 
  background(0,0,0); 


  let baseHue = random(360); // tono base random
  
  for (let i = 0; i < 10; i++) {
    hues[i] = baseHue; // mismo tono para todos los círculos
    sizes[i] = random(20, 80); 
    x[i] = random(width); // Posición x random
    y[i] = height / 2; // Posición y centro vertical
    speeds[i] = random(1, 3); 
  }
}

function draw() {
  background(0,0,0); // Redibuja el fondo en cada frame
  noStroke(); 
  
  for (let i = 0; i < x.length; i++) {
    x[i] += speeds[i];
    //+= actualiza la posición x del círculo
    
    
    if (x[i] > width + sizes[i] / 2) {
      x[i] = -sizes[i] / 2;
    } //cuando sale del borde derecho, reaparece en el izquierdo
    
    
    let hue = hues[i]; // mismo tono para los circulos
    let saturation = random(50, 100); 
    let lightness = random(50, 80); 
    
    fill(hue, saturation, lightness); // aplicar colores al círculo HSL
    ellipse(x[i], y[i], sizes[i]); 
  }
}
