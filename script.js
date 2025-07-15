// define html element

const board = document.getElementById("game-board");

//Define game variable
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = generateFood();

//Draw game map, snake, food
function draw() {
  board.innerHTML = "";
  drawSnake();
  drawFood();
}

// draw snake
function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement("div", "snake");
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  });
}

// create a snake or food cube/div
function createGameElement(tag, className) {
  const element = document.createElement(tag); //create a div
  element.className = className; //give the div a class name of snake
  return element;
}

// set the posotion of snake or food
function setPosition(element, posotion) {
  element.style.gridColumn = posotion.x;
  element.style.gridRow = posotion.y;
}

// Testing draw funtion
draw();

// draw food funtion
function drawFood() {
  const foodElement = createGameElement("div", "food");
  setPosition(foodElement, food);
  board.appendChild(foodElement);
}

function generateFood() {
  const x = Math.floor(Math.random() * gridSize) + 1;
  const y = Math.floor(Math.random() * gridSize) + 1;
  return { x, y };
}

//testing
// console.log(generateFood());
