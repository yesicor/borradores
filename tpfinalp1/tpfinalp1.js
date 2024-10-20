let arrayImagen = [ ];
let arrayTexto = [ ];
let ancho = 640;
let alto = 480;

function preload() {
  for(i = 0; i < 41; i++){
    arrayImagen[i] = loadImage("data/imagen"+i+".jpg");
  }
  
 for(i = 0; i < 41; i++){
    arrayTexto[i] = loadStrings("data/texto"+i+".txt");
  } 
  
}

function setup() {
  createCanvas(640,480);
  background(0);
  textAlign(LEFT);
  textSize(15);
  estado = 0;
}

function draw() {
  if (estado===0){
    menu();
  }
  
  if ((estado>0) && (estado<11)){
    cambioEstado(1,estado,11);
  }
  
  if (estado===10){
    desicion(estado);
  }
  
  if ((estado>10)&&(estado<15)){
    cambioEstado(11,estado,15);
  }
  
  print(pmouseX + "/" + pmouseY);  
  print("estado:" + estado);
}

function mousePressed(){
  let botónSiguiente = ((mouseY >= 440) && (mouseY <= 460) && (mouseX >= 550) && (mouseX <= 600));
  let botónStart = ((mouseY >= 373) && (mouseY <= 413) && (mouseX >= 280) && (mouseX <= 365));
  let botónCréditos = ((mouseY >= 440) && (mouseY <= 460) && (mouseX >= 280) && (mouseX <= 365));
  //let botónRestart = ;
  let botónDerecha = ((mouseY >= 390) && (mouseY <= 430) && (mouseX >= 480) && (mouseX <= 565));
  let botónIzquierda = ((mouseY >= 390) && (mouseY <= 430) && (mouseX >= 280) && (mouseX <= 365));
  
  let = sePuedeReiniciar = ((estado===40)||(estado === 34)||(estado===28)); 
  let = sePuedeComenzar = (estado===0);
  let = sePuedeSeguir = !((estado==10)||(estado===16));

  if ((botónStart)&&(sePuedeComenzar)){
    estado=1;
  }
  
  //if((botónRestart)&&(sePuedeReiniciar)){
  //  estado=0;
  //}
  
  if ((botónSiguiente) && (sePuedeSeguir)){
    estado++;
  }
  
  if ((botónDerecha)||(botónIzquierda) && (estado==10)){
    estado=11;
  }
}
