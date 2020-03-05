// O(n)
// this function takes two arrays of integers and compares them, checking to see if the second
// array contains an exact randomly sorted duplicate of the first array except each of the
// values are squared
// returns true if condition passes; false otherwise
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let fc1 = {};
  let fc2 = {};
  for (let e of arr1) {
    fc1[e] = (fc1[e] || 0) + 1;
  }
  for (let e of arr2) {
    fc2[e] = (fc2[e] || 0) + 1;
  }
  for (let key in fc1) {
    if (!(key ** 2 in fc2)) {
      return false;
    }
    if (fc2[key ** 2] !== fc1[key]) {
      return false;
    }
  }
  return true;
};

console.log(same([1, 2, 3, 4, 5, 5], [25, 16, 9, 4, 1, 25]));
