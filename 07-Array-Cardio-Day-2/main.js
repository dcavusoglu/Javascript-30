 // ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    const isAdult = people.some(person =>
      ((new Date().getFullYear()) - person.year)
    );
    console.log(isAdult);

    // const isAdult = people.some(function(person) {
    //   if ((new Date().getFullYear()) - person.year)
    //   return true;
    // })

    // Array.prototype.every() // is everyone 19 or older?

    const allAdult = people.every(person =>
      ((new Date().getFullYear()) - person.year));
    console.log(allAdult);

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    const findID = comments.find(comment =>
    (comment.id === 823423));
    console.log(findID);

    // Array.prototype.findIndex()
    const findIndex = comments.findIndex(comment =>
    comment.id === 823423);
    console.log(findIndex);
    // Find the comment with this ID
    // delete the comment with the ID of 823423

    //comments.splice(findIndex, 1);
    const reducedArray = [
      ...comments.slice(0, findIndex),
      ...comments.slice(findIndex + 1)
    ];
    console.log(reducedArray);
    console.log(comments);
