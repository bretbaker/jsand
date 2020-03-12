// O(n)
const linearSearch = (arr, e) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === e) return i;
  }
  return -1;
};
