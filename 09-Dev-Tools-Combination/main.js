    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('This is Duygu!');
    // Interpolated
    const p = document.querySelector('p');
    console.log(`Hello, this is ${p.innerText}`);
    console.log('Hello, this is a %s string!', '🏃🏽‍♀️');
    // Styled
    console.log('%c This text has some distinctive styling', 'color: blue; background: black; font-weight: bolder');

    // warning!
    console.warn('hey ya!');

    // Error :|
    console.error('why are you doing this all the time!');
    // Info
    console.info('everything you write will be displayed here');
    // Testing

    console.assert(p.classList.contains('para'), 'That is wrong!');
    // clearing
    console.clear();
    // Viewing DOM Elements
    console.log(p);
    console.dir(p);
    // Grouping together
    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`${dog.name}`);
      console.log(`${dog.age}`);
      console.groupEnd(`${dog.name}`);
    }
      );
    // counting
    console.count(p);

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/dcavusoglu')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.table(data);
    });
