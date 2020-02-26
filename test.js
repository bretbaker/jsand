const codeTimer = (func, arg) => {
  let start = process.hrtime.bigint();
  func(arg);
  let end = process.hrtime.bigint();
  let time = end - start;
  return console.log(`Process completed in ${time} nanoseconds`);
};

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

console.log('\nFunction 1');
codeTimer(addUpTo1, 1000000);
console.log('\nFunction 2');
codeTimer(addUpTo2, 1000000);
