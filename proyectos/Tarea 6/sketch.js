let particles = [];

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  background(0);

  if (particles.length < 50) { 
    for (let i = 0; i < 5; i++) {
      particles.push(new Particle(width / 2, height / 2));
    }
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
  }
}

class Particle {
  constructor(x, y) {
    this.center = createVector(x, y);
    this.angle = random(TWO_PI);
    this.radius = random(50, 300);
    this.angularSpeed = random(0.01, 0.03);
    this.alpha = random(100, 255);
    this.color = color(105, 141, 194);
    this.r = random(10, 40);
    this.gravity = 0.1;
    this.velocity = 0;
  }

  update() {
    this.angle += this.angularSpeed;
    this.velocity += this.gravity;
    this.center.y += this.velocity;

    if (this.center.y > height) {
      this.center.y = 0;
      this.velocity = 0;
    }
  }

  show() {
    let x = this.center.x + cos(this.angle) * this.radius;
    let y = this.center.y + sin(this.angle) * this.radius;

    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.alpha);
    noStroke();
    
    ellipse(x, y, this.r, this.r);
  }
}
