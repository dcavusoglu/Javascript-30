const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bandList = document.querySelector('#bands');

function noArticles(band) {
  return band.replace(/^(the |a |an )/i, '').trim();
}


const orderBands = bands.sort((a,b) => noArticles(a) > noArticles(b) ? 1 : -1);

bandList.innerHTML = orderBands.map(band =>
  `<li>${band}</li>`
).join('');


console.log(orderBands);
