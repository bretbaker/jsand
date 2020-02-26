const dotFlat = arr => {
  arr = arr
    .toString()
    .split('')
    .join('')
    .split(',');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'true') {
      arr[i] = true;
    } else if (arr[i] === 'false') {
      arr[i] = false;
    } else if (parseFloat(arr[i])) {
      arr[i] = parseFloat(arr[i]);
    }
  }
  return console.log(arr);
};

dotFlat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]);
dotFlat([true, false], [false, false]);
dotFlat([
  ['a', 'b'],
  ['c', 'd']
]);
