const inputs = document.querySelectorAll('.controls input');
function updateView() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}



inputs.forEach(input => input.addEventListener('change', updateView));
inputs.forEach(input => input.addEventListener('mousemove', updateView));
