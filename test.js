const evenOddTransform = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) arr[i] -= 2 * n;
    else arr[i] += 2 * n;
  }
  return console.log(arr);
};

evenOddTransform([3, 4, 9], 3);
