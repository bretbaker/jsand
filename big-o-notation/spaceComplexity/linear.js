// O(n) || Linear

// This function loops over an array, multiplies the value at current index by 2
// and then pushes the new value into a new array and returns that new array
// This function is considered linear because the space it requires grows
// with the size of the input array

const double = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
};
