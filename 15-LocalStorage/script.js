const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem("items")) || [];


function addItem(e) {
  const input = this.querySelector('[name=item]').value;
  e.preventDefault();
  const newItem = {
    name: input,
    done:false
  };

  items.push(newItem);
  console.log(newItem);
  console.log(items);
  displayItems(items,itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();

}

function displayItems(items, itemsList) {
  itemsList.innerHTML = items.map((item, i) => {
    return `
    <li>
    <input type='checkbox', data-index= '${i}', id= 'item${i}', ${item.done ? 'checked' : ''}/>
    <label for="item${i}">${item.name}</label>
    </li>
    `;
  }).join('');
}

function toggleCheck(e) {

  // two things show up in the console, see what they are
  // checkbox and input
  if (!e.target.matches('input')) return;
  const clicked = e.target;
  const index = clicked.dataset.index;
  items[index].done = !items[index].done
  localStorage.setItem("items", JSON.stringify(items));
  displayItems(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleCheck);

displayItems(items, itemsList);
