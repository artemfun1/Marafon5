const startBtn = document.querySelector('#start');

const screens = document.querySelectorAll('.screen');

const timeList = document.querySelector('#time-list');

const timeEl = document.querySelector('#time');

const board = document.querySelector('#board');

let time = 1;
let score = 0;

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setTime(time);
  createRandomCircle();
  setInterval(decreaseTime, 1000);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    //  if(current<10){
    //   current = `0${current}`
    //  }
    setTime(current);
  }
}

function setTime(value) {
  if (value < 10) {
    value = `0${value}`;
  }
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  timeEl.parentNode.classList.add('hide');

  board.innerHTML = `<h1> Cчет: <span class='primary'>${score}</span></h1>`;
}

function createRandomCircle() {
  const circl = document.createElement('div');
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circl.classList.add('circle');
  circl.style.width = `${size}px`;
  circl.style.height = `${size}px`;
  circl.style.top = `${y}px`;
  circl.style.left = `${x}px`;

  let bcColor = getRandomColor();
  circl.style.background = bcColor;

  board.append(circl);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const colors = ['#fff', '#000', 
];

// '#0011ff', '#00ff00'

let ArColor =['']

function getRandomColor() {
  // return '#fff'
  let elem = ArColor[ArColor.length-1]
  ArColor.splice(0,ArColor.length);
  ArColor[0] = elem
 
  do{
    ArColor.push(colors[Math.floor(Math.random() * colors.length)])
    console.log(ArColor)
  } while(
    ArColor[ArColor.length-1] === ArColor[ArColor.length-2]
  )
return ArColor[ArColor.length-1]
}


function winTheGame(){
  function kill(){
  const circle = document.querySelector('.circle')

  if(circle){
    circle.click()
  }

  
  }
 setInterval(kill, 42);
}