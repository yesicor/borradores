function cargarImagen (imagen) {
  image(imagen,0,0,ancho,alto);
}

function cargarTexto (texto) {
  text(texto,30,375,590,60);
}

function menu(){
  cargarImagen(arrayImagen[0]);
  dibujaStart();
  dibujaCreditos();
  
}

function cambioEstado(inicio,pantalla,indice) {
  for(i=inicio;i<indice;i++){
    cargarImagen(arrayImagen[pantalla]);
    strokeWeight(5);
    stroke(0);
    fill(75, 0, 130); 
    rect(20,355,600,110);
    cargarTexto(arrayTexto[pantalla]);
    if(estado<(indice-1)){
      dibujaSiguiente();
    }
  }
}

function desicion(pantalla){
  cargarImagen(arrayImagen[pantalla]);
  if(pantalla===10){
    fill(255)
    dibujaDecision(200,"Elegir TELEPATÍA");
    dibujaDecision(0,"Elegir FUERZA")
  }
  
  
}
