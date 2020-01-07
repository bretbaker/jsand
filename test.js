const uniqueSort = a => {
  let s = new Set(a);
  return console.log(Array.from(s).sort((a, b) => a - b));
};

uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10]);
