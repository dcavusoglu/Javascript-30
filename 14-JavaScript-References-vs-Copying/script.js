// start with strings, numbers and booleans
let name = 'Duygu';
console.log(name);

let name2 = 'Ceren';
console.log(name2);
name2 = name;
console.log(name2);



    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const newList = players;
    console.log(newList);
    // newList[3] = 'Cruz';


    // You might think we can just do something like this:

    // however what happens when we update that array?

    // now here is the problem!
    console.log(players);

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!


    // one way
    const withSlice = players.slice();
    console.log('withSlice:', withSlice);

    // or create a new array and concat the old one in
    const withConcat = [].concat(players);
    console.log('withConcat:', withConcat);

    // or use the new ES6 Spread
    const withSpread = [...players];
    console.log('withSpread:', withSpread);

    // now when we update it, the original one isn't changed
    withSpread[3] = 'Danny';
    console.log('withSpread:', withSpread);
    console.log('players:', players);

    const withArrayFrom = Array.from(players);
    console.log('withArrayFrom:', withArrayFrom);


    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:

    // how do we take a copy instead?
    const newPerson = Object.assign({}, person, {hobby: 'cycling'});
    console.log('newPerson:', newPerson);


    // We will hopefully soon see the object ...spread

    // const another = {...person};

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const duygu = {
      name: 'Duygu',
      age: 34,
      social: {
        twitter: '@dcavusoglu',
        linkedin: 'duygucavusoglu'
      }
    };

    console.log('duygu:', duygu);


    const devDuygu = Object.assign({}, duygu);
    console.log('devDuygu:', devDuygu);

    // to copy the object you can stringify it and immediately turn into an object
    // by JSON.parse.
    const jsonDuygu = JSON.parse(JSON.stringify(duygu));

    console.log('jsonDuygu:', jsonDuygu);

    jsonDuygu.social.facebook = 'ducawebdev';
    console.log('jsonDuygu:', jsonDuygu);
// the original doesn't change.
    console.log('devDuygu:', devDuygu);
