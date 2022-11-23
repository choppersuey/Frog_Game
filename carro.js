let velocidades = [7, 6.5, 8, 9, 7.5];
let xCarros = [630, 10, 630, 10, 630];
let yCarros = [50, 150, 250, 350, 450];
let colisao = false;

function mostraCarros(){
  for(let i=0; i < carros.length; i += 1){
    image(carros[i], xCarros[i], yCarros[i], 70, 40);
  }
}

function movimentacaoCarros(){
  for(i = 0; i < carros.length; i += 2){
    xCarros[i] -= velocidades[i];
  }
  for(i = 1; i < carros.length; i += 2){
    xCarros[i] += velocidades[i];
  }
}

function repeticaoCarros(){
  for(i = 0; i < carros.length; i += 2){
    if(xCarros[i] < -30){
      xCarros[i] = 730;
    }
  }
  for(i = 1; i < carros.length; i += 2){
    if(xCarros[i] > 750){
      xCarros[i] = -10;
    }
  }
}

function verificaColisao(){
  for(i = 0; i < carros.length; i += 2){
    colisao = collideRectRect(xCarros[i], yCarros[i], 70, 40, xFrog, yFrog, 30, 45);
    if(colisao){
      yFrog = 500;
      somColisao.play();
      if(pontos > 0){
      pontos -= 1;
      }
    }
  }
  for(i = 1; i < carros.length; i += 2){
    colisao = collideRectRect(xCarros[i], yCarros[i], 70, 40, xFrog, yFrog, 30, 45);
    if(colisao){
      yFrog = 500;
      somColisao.play();
       if(pontos > 0){
      pontos -= 1;
      }
    }
  }
} 

