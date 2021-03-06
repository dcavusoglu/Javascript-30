const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function makeVideo() {
  navigator.mediaDevices.getUserMedia({video:true, audio:false})
    .then(localMediaStream => {
    console.log(localMediaStream);
    //this does not work
    // video.src = localMediaStream;
    // you need to turn it into an object url
    video.srcObject = localMediaStream;
    video.play();
  })
  .catch(err => {
      console.error(`OH NO!!!`, err);
      })
}

function showOnCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height)
  }, 16);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src='${data}' alt='Handsome' />`;
  strip.insertBefore(link, strip.firstChild);
}

video.addEventListener('canplay', showOnCanvas);

makeVideo();
