let xFrog = 200;
let yFrog = 500;
let pontos = 0;

function mostraFrog(){
  image(frog, xFrog, yFrog, 30, 45);
}

function movimentacaoFrog(){
  if(keyIsDown(UP_ARROW)){
    yFrog -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    yFrog += 5;
  }
}

function retornaFrog(){
  if(yFrog < 5){
    yFrog = 500;
    pontos += 1;
    somPontos.play();
  }
  if(yFrog > 500){
    yFrog = 500;
  }
}

function marcaPonto(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 255, 255))
  text(pontos, width / 5, 27);
}
