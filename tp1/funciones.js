function dibujarRombos(tam1,tam2,juancito){
  var cant = 4;
  var trom = 68.5;
  for(let r = 0; r < cant; r++){
    for(let t = 0; t< cant; t++){
      push();
      translate(455+r*tam1,6+t*tam2); //translada el eje de cordenadas a la distancia entre cuadrado y cuadrado
      rotate(radians(45)); //rota los cuadrado conviertiendolos en rombos
      rectMode(CORNER);
      noStroke();
      fill(juancito);
      rect(0,0,trom,trom);
      pop();
    }
  }
}


function dibujarLineas(){
  let   ancho = 455 + 291; 
  let   alto = 55 + 291;
  let distancia = 4;
  for(let j = 455; j < ancho; j+=distancia){
    strokeWeight(1.5);
    stroke(lineas);
    line(j,55,j,alto);
  }
}

function dibujarCuadros(){
  let cant = 3;
  let aumen = 100;
  let degrade = 80;
  for(let y = 0; y < cant; y++){
    //noStroke();
    //if (y===1){
    //  cuadrosre.setAlpha(160);
    //}
    //if(y===2){
    //  cuadrosre.setAlpha(0);
    //}
    //cuadrosre.setAlpha(100-y*degrade);
    //fill(cuadrosre,0+y*degrade);
    fill(cuadrosre);
    stroke(0);
    rectMode(CENTER);
    rect(601,201,291-y*aumen,291-y*aumen);
  }
}

function dibujarRecuadro(){
  noStroke();
  fill(recuadro);
  rect(405,5,390,390);
}

function colorInteractivo (pos){
  return (height-pos);
}
