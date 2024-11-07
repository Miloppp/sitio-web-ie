 function setup() {
  createCanvas(400, 400); 
  noStroke(); 
}

function draw() {
  background(0); 
  
  translate(width / 2, height / 2); 
  
  push(); 
 
  rotate(frameCount * 0.005);
  scale(0.8 + sin(frameCount * 0.01) * 0.4);
  let r = 150;
  let points = 20;
  
  for (let i = 0; i < points; i++) {
    let angle = TWO_PI / points * i; 
    
    let x = r * cos(angle);
    let y = r * sin(angle);
    
    let c = color(181, 246, 205, 127); 
    fill(c);
    
    ellipse(x, y, 40, 40);   
  }
  
  pop();   
  
  push(); 
  rotate(frameCount * -0.005); 
  
  let r2 = 130;
  let points2 = 15;
  
  for (let i = 0; i < points2; i++) {
    let angle = TWO_PI / points2 * i; 
    
    let x = r2 * cos(angle);
    let y = r2 * sin(angle);
    
    let c = color(181, 190, 246, 127); 
    fill(c);
    
    ellipse(x, y, 40, 40);   
  }
  pop(); 

  
  push();
  rotate(frameCount * 0.005);
   scale(0.8 + sin(frameCount * 0.05) * 0.4);
  let r3= 110;
  let points3 = 10;
  
  for (let i = 0; i < points3; i++){
    let angle = TWO_PI / points3 * i;
    
    let x = r3 * cos(angle);
    let y = r3 * sin(angle);
    
    let c = color (246, 181, 222, 127);
    fill (c);
    ellipse (x, y, 40, 40);
  }
    pop ();
  
  push();
  rotate (frameCount * -0.005);
  
  let r4 = 90;
  let points4 = 10
  
  for (let i = 0; i < points4; i++){
    let angle = TWO_PI / points4 * i
    
    let x = r4 * cos(angle);
    let y = r4 * sin(angle);
    
    let c = color (246, 237, 181, 127);
    fill (c);
    ellipse (x, y, 40, 40);
  }
  
  pop();
  
  
   

  }



  
