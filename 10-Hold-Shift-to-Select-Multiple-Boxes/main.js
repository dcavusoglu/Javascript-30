const checkboxes = document.querySelectorAll('.input');
checkboxes.forEach(checkbox => checkbox.addEventListener('click', changeStatus));

let lastChecked;
function changeStatus(e) {

  console.log(e);
}
