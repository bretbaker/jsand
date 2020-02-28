// O(1) || Constant

// The reason this funstion is constant in terms of space complexity is because
// it is returning a single value 'total'
// Technically this example is O(2) because of 'let i = 0'

const sum = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};
