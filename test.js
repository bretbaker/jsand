const equal = (a, b, c) => {
  if (a === b && a === c) return console.log(3);
  if (a === b && a !== c) return console.log(2);
  if (a !== b && a === c) return console.log(2);
  if (a !== b && b === c) return console.log(2);
  else return console.log(0);
};

equal(1, 2, 3);
equal(1, 1, 1);
equal(1, 1, 2);
