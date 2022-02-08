const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('.score');
// define lastHole globally.
let lastHole;
let timeUp = false;
let score = 0;

function randTime(min, max) {
  return Math.round(Math.random() * (max-min) + min);
}

function randHole(holes) {
  const idHole = Math.floor(Math.random() * holes.length);
  //return idHole;  -- This gives us the id of the hole picked,
  // however, we want its own div, a new const will be defined as hole
  const hole = holes[idHole];
  // console.log(hole);
 // not to have the same hole in a row, a condition is helpful
  if(hole === lastHole) {
    console.log('The same hole');
    return randHole(holes);
  }

  lastHole = hole;
  return hole;
}

function popUp() {
  const time = randTime(200, 2000);
  const hole = randHole(holes);
  console.log(time, hole);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) popUp();
  }, time);
}

function startGame () {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  popUp();
  setTimeout(() =>
    timeUp = true, 10000);
}

function bam(e) {
console.log(e);
if(!e.isTrusted) return;
score++;
this.classList.remove('up');
scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bam));
