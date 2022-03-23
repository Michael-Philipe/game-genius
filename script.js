let order = [];
let clickedOrder = [];
let score = 0;

//0 - green
//1 - red
//2 - yellow
//3 - blue

const BLUE = document.querySelector('.blue');
const RED = document.querySelector('.red');
const GREEN = document.querySelector('.green');
const YELLOW = document.querySelector('.yellow');

//cria ordem aleatoria de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

//acende a proxima cor
const lightColor = (element, number) => {
  console.log(number);
  number = number * 500;

  setTimeout(() => {
    element.classList.add('selected');
  }, number);

  setTimeout(() => {
    element.classList.remove('selected');
    console.log(element.classList);
  }, number + 200);
};

//checa se os botoes clicados são os mesmo da ordem gerada no jogo
let checkOrder = () => {
  for (let i in clickedOrder)
    if (clickedOrder[i] !== order[i]) {
      gameOver();
      break;
    }

  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`);
    nextLevel();
  }
};

//função para o clike do usuario

const click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
};

//função que retorna a cor
const createColorElement = (color) => {
  if (color == 0) {
    return GREEN;
  } else if (color == 1) {
    return RED;
  } else if (color == 2) {
    return YELLOW;
  } else if (color == 3) {
    return BLUE;
  }
};

//função para proximo nivel do jogo

const nextLevel = () => {
  score++;
  shuffleOrder();
};

//função para game over

const gameOver = () => {
  alert(
    `Pontuação: ${score}!\n Você perdeu um jogo!\n Clique em OK para iniciar um novo jogo.`
  );
  order = [];
  clickedOrder = [];

  playGame();
};

const playGame = () => {
  alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
  score = 0;

  nextLevel();
};

// GREEN.addEventListener('click', click(0));
// RED.addEventListener('click', click(1));
// YELLOW.addEventListener('click', click(2));
// BLUE.addEventListener('click', click(3));

//eventos de click para as cores
GREEN.onclick = () => click(0);
RED.onclick = () => click(1);
YELLOW.onclick = () => click(2);
BLUE.onclick = () => click(3);

//inicio do jogo
playGame();
