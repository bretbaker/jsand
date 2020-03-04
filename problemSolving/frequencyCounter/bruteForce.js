// O(n^2)
// this function takes two arrays of integers and compares them, checking to see if the second
// array contains an exact randomly sorted duplicate of the first array except each of the
// values are squared
// returns true if condition passes; false otherwise
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    let ind = arr2.indexOf(arr1[i] ** 2);
    if (ind === -1) {
      return false;
    }
    arr2.splice(ind, 1);
  }
  return true;
};
