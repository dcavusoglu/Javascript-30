


  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    //start over
    if (!audio) return;
    // audio can play immediately
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  };

  //add an ending transition function to all keys
  function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  const keys = document.getElementsByClassName('key');
  for (let i = 0; i < keys.length; i++) {
      const keyItem = keys[i];
      keyItem.addEventListener("transitionend", removeTransition);
    }

  window.addEventListener('keydown', playSound);
