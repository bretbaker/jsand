const addUpTo1 = n => {
  let sum = 0;
  for (let i = 0; i < n + 1; i++) {
    sum += i;
  }
  return sum;
};

const addUpTo2 = n => {
  return (n * (n + 1)) / 2;
};
