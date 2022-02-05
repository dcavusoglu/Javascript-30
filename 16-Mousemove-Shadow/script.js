const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function displayShadow(e) {
  const {offsetWidth : width, offsetHeight : height} = hero;
  let {offsetX: x, offsetY: y} = e;
  // console.log(hero);
  // console.log(e);
  if(this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  console.log(x,y);

  const xWalk = Math.round((x / width * walk) - (walk/2));
  const yWalk = Math.round((y / height * walk) - (walk/2));

  text.style.textShadow = ` ${xWalk}px ${yWalk*-1}px 0 rgba(250,30,85, 0.5),
  ${xWalk*-1}px ${yWalk}px 0 rgba(250,30,85, 0.5),
  ${yWalk* -1}px ${xWalk}px 0 rgba(250,90,85, 0.5),
  ${yWalk}px ${xWalk* -1}px 0 rgba(250,90,25, 0.5)
  `;

}

hero.addEventListener('mousemove', displayShadow);
