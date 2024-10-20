
function dibujaSiguiente(){
  stroke(0);
  fill(255, 255, 0);
  rect(550,440,50,20);
  fill(255)
  text("--->",565,455);
}

function dibujaStart(){
  stroke(0);
  fill(75, 0, 130);
  rect(280,373,85,40);
  fill(255);
  textSize(20);
  text("START",290,400);
}

function dibujaCreditos(){
  stroke(0);
  fill(75, 0, 130);
  rect(280,440,85,20);
  fill(255);
  textSize(15);
  text("CRÉDITOS",283,455);
}

//function dibujaSiguiente(){
//  stroke(0);
//  fill(255);
//  rect(550,440,50,20);
//  text("--->",565,455);
//}

function dibujaDecision(coord,mensaje){
  strokeWeight(2);
  stroke(0);
  fill(75, 0, 130);
  rect(280 + coord, 390, 85, 40);
  fill(255); 
  textSize(15);
  text(mensaje, 283 + coord, 395, 80, 35);
}
