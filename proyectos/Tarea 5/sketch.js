let estrellas = [];         
let triangulos = [];

function setup() {
  createCanvas(500, 500);
  noStroke();
  
  for (let i = 0; i < 3; i++) {
    estrellas.push(new Estrella(random(width), random(height)));
    triangulos.push(new Triangulo(random(width), random(height)));
  }
}

function draw() {
  background(20);
  
  for (let i = estrellas.length - 1; i >= 0; i--) {
    estrellas[i].update();
    estrellas[i].display();
    
    if (estrellas[i].outOfBounds()) {
      estrellas.splice(i, 1);
      estrellas.push(new Estrella(random(width), random(height)));
    }
  }

  for (let i = triangulos.length - 1; i >= 0; i--) {
    triangulos[i].update();
    triangulos[i].display();
    
    if (triangulos[i].outOfBounds()) {
      triangulos.splice(i, 1);
      triangulos.push(new Triangulo(random(width), random(height)));
    }
  }
}

class Estrella {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.color = color(200, 213, 245);
    this.xSpeed = random(1, 3);  // Velocidad en x
    this.ySpeed = random(1, 3);  // Velocidad en y
  }
  
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  
  display() {
    fill(this.color);
    beginShape();
    for (let i = 0; i < 5; i++) {
      let angle = TWO_PI / 5 * i;
      let x = this.x + cos(angle) * this.size;
      let y = this.y + sin(angle) * this.size;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
  
  //crea una figura nueva si se sale del borde
  outOfBounds() {
    return (this.x > width || this.x < 0 || this.y > height || this.y < 0);
  }
}

class Triangulo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.size = 30;
    this.xSpeed = random(1, 3);  
    this.ySpeed = random(1, 3);  
  }
  
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    
    this.size = 30 + sin(this.angle) * 10;
    this.angle += 0.05;
  }
  
  display() {
    fill(186, 244, 218);
    triangle(this.x, this.y - this.size / 2, 
             this.x - this.size / 2, this.y + this.size / 2, 
             this.x + this.size / 2, this.y + this.size / 2);
  }
  
  outOfBounds() {
    return (this.x > width || this.x < 0 || this.y > height || this.y < 0);
  }
}
