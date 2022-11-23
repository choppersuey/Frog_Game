function setup() {
  createCanvas(713, 540);
  tema.loop();
}

function draw(){
  background(estrada);
  mostraFrog();
  movimentacaoFrog();
  retornaFrog();
  mostraCarros();
  movimentacaoCarros();
  repeticaoCarros();
  verificaColisao();
  marcaPonto();
}