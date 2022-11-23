let frog;
let carros = [1, 2, 3, 4, 5];
let estrada;
let tema;
let somPontos;
let somColisao;

function preload(){
  frog = loadImage("Imagens/frog.png");
  estrada = loadImage("Imagens/estrada.png");
  carros[0] = loadImage("Imagens/Carro1.png");
  carros[1] = loadImage("Imagens/Carro2.png");
  carros[2] = loadImage("Imagens/Carro3.png");
  carros[3] = loadImage("Imagens/Carro4.png");
  carros[4] = loadImage("Imagens/Carro5.png");
  tema = loadSound("Imagens/temaFundo.mp3");
  somPontos = loadSound("Imagens/pontos.wav");
  somColisao = loadSound("Imagens/colidiu.mp3");
}
