const removeDups = arr => {
  let set1 = new Set(arr);
  console.log(set1);
  console.log(Array.from(set1));
};

removeDups(['John', 'Taylor', 'John']);
