const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playBtn = player.querySelector('.toggle');
const skipBtns = player.querySelectorAll('[data-skip]');
const adjustmentBtns = player.querySelectorAll('.player__slider');
const fullscreenBtn = player.querySelector('.goFull');


function videoStatus() {
  // if(video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
  video.paused ? video.play() : video.pause();
}

function changeBtn() {
  const icon = this.paused ? '\u25B6' : '\ıı';
  playBtn.textContent = icon;
}

function moveForward() {
  // const skipTime = this.dataset.skip; => if you write like this,
  // since it is a string,
  // it won't add the time to the currentTime.
  // so you need to change it into an integer.
  const skipTime = parseFloat(this.dataset.skip);
  video.currentTime += skipTime;
  console.log(video.currentTime);
}
function adjustment() {
  video[this.name] = this.value;
}

function showProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`
}
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function goFull(e) {
  if(document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    player.requestFullscreen();
  }
}

playBtn.addEventListener('click', videoStatus);
video.addEventListener('play', changeBtn);
video.addEventListener('pause', changeBtn);
video.addEventListener('click', videoStatus);
video.addEventListener('timeupdate', showProgress);
skipBtns.forEach(skipBtn => skipBtn.addEventListener('click', moveForward));
adjustmentBtns.forEach(btn => btn.addEventListener('change', adjustment));
adjustmentBtns.forEach(btn => btn.addEventListener('mousemove', adjustment));


let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


fullscreenBtn.addEventListener('click', goFull);
