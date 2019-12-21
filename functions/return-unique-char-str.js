const filterUnique = arr => {
  console.log(arr.filter(x => new Set(x).size == x.length));
  return arr.filter(x => new Set(x).size == x.length);
};

filterUnique(['abb', 'abc', 'abcdb', 'aea', 'bbb']);
