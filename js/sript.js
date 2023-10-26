
/*
// Selecionar os elementos do carrossel
let carousel = document.querySelector(".carousel-cards");
let cards = document.querySelectorAll(".cards-students img");
let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");

// Definir o índice do cartão atual
let currentIndex = 0;

// Adicionar evento de clique na seta esquerda
arrowLeft.addEventListener("click", function() {
  // Verificar se o índice é maior que zero
  if (currentIndex > 0) {
    // Ocultar o cartão atual
    cards[currentIndex].style.display = "none";
    // Decrementar o índice
    currentIndex--;
    // Mostrar o cartão anterior
    cards[currentIndex].style.display = "block";
  }
});

// Adicionar evento de clique na seta direita
arrowRight.addEventListener("click", function() {
  // Verificar se o índice é menor que o número de cartões menos um
  if (currentIndex < cards.length - 1) {
    // Ocultar o cartão atual
    cards[currentIndex].style.display = "none";
    // Incrementar o índice
    currentIndex++;
    // Mostrar o cartão seguinte
    cards[currentIndex].style.display = "block";
  }
});

*/

/*
// Selecionar os elementos do carrossel
let carousel = document.querySelector(".carousel-cards");
let cards = document.querySelectorAll(".cards-students img");
let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");

// Definir o índice do cartão atual
let currentIndex = 0;

// Definir uma função para mudar o cartão
function changeCard(direction) {
  // Ocultar o cartão atual
  cards[currentIndex].style.display = "none";
  // Verificar a direção
  if (direction === "left") {
    // Decrementar o índice se for maior que zero
    currentIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
  } else if (direction === "right") {
    // Incrementar o índice se for menor que o número de cartões menos um
    currentIndex = currentIndex < cards.length - 1 ? currentIndex + 1 : currentIndex;
  }
  // Mostrar o cartão atualizado
  cards[currentIndex].style.display = "block";
}

// Adicionar evento de clique na seta esquerda
arrowLeft.addEventListener("click", function() {
  changeCard("left");
});

// Adicionar evento de clique na seta direita
arrowRight.addEventListener("click", function() {
  changeCard("right");
});

// Definir um intervalo para mudar o cartão automaticamente a cada 20 milissegundos
let interval = setInterval(function() {
  changeCard("right");
}, 4000);

*/

// Selecionar os elementos do carrossel
let carousel = document.querySelector(".carousel-cards");
let cards = document.querySelectorAll(".cards-students img");
let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");

// Definir o índice do cartão atual
let currentIndex = 0;

// Definir uma função para mudar o cartão
function changeCard(direction) {
  // Ocultar o cartão atual
  cards[currentIndex].style.display = "none";
  // Verificar a direção
  if (direction === "left") {
    // Decrementar o índice se for maior que zero, ou voltar para o último cartão
    currentIndex = currentIndex > 0 ? currentIndex - 1 : cards.length - 1;
  } else if (direction === "right") {
    // Incrementar o índice se for menor que o número de cartões menos um, ou voltar para o primeiro cartão
    currentIndex = currentIndex < cards.length - 1 ? currentIndex + 1 : 0;
  }
  // Mostrar o cartão atualizado
  cards[currentIndex].style.display = "block";
}

// Adicionar evento de clique na seta esquerda
arrowLeft.addEventListener("click", function() {
  changeCard("left");
});

// Adicionar evento de clique na seta direita
arrowRight.addEventListener("click", function() {
  changeCard("right");
});

// Definir um intervalo para mudar o cartão automaticamente a cada 20 milissegundos
let interval = setInterval(function() {
  changeCard("right");
}, 4000);