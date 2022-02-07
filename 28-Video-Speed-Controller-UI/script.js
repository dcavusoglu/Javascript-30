const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const speedBar = speed.querySelector('.speed-bar');

function handleMove(e){
  const y = e.pageY - this.offsetTop;
  console.log(y);
  const percent = y / this.offsetHeight;
  console.log('percent:', percent);
  const height = Math.round(percent * 100) + '%';
  console.log('height:', height);

  const min = 0.4;
  const max = 4;
  const playRate = percent * (max - min) + min;
  speedBar.style.height = height;
  console.log('playrate:', playRate)
  speedBar.textContent = playRate.toFixed(2) + 'x';
  video.playbackRate = playRate;
}

speed.addEventListener('mousemove', handleMove);
