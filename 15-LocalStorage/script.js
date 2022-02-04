const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];


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
  this.reset();
  displayItems(items,itemsList);

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

addItems.addEventListener('submit', addItem);
// addItems.addEventListener('submit', displayItems);
