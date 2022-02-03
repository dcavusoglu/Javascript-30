const pressed = [];
const password = "duygu";

window.addEventListener('keyup', event => {
  event.key;
  pressed.push(event.key);
  pressed.splice(-password.length -1, pressed.length - password.length)
  console.log(pressed);
  if(pressed.join('').includes(password)) {
    console.log('DING DONG');
    cornify_add();
  }
})
