const codeTimer = (func, arg) => {
  let start = process.hrtime.bigint();
  func(arg);
  let end = process.hrtime.bigint();
  let time = end - start;
  return console.log(`Process completed in ${time} nanoseconds`);
};
