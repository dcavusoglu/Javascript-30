const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const places = [];

fetch(endpoint)
.then(blob => blob.json())
.then(data => places.push(...data))

function findMatches(newEntry, places) {
  return places.filter(place => {
    const regex = new RegExp(newEntry, 'gi')
    return place.city.match(regex) || place.state.match(regex);
  });
}

// this function is from stackoverflow to write numbers with commas which is used to display population in the next function.
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function displayMatches() {
// we need to get the outcome of find matches function
// and inclue -this.value- into it to combine the eventListeners and finding function.
  const newMatch = findMatches(this.value, places);
  const displayResults = newMatch.map(place => {

// in css file, input in the search is highlighted with yellow color, so the following three lines are
// to define the searched iten in cities and states and highlight them.
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`);
    return `<li>
              <span class="name">${cityName}, ${stateName}</span>
              <span class="population">${numberWithCommas(place.population)}</span>
            </li>`;
  }).join('');

  suggestions.innerHTML = displayResults;
  }

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
