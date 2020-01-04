const concat = (...args) => {
  args = args
    .toString()
    .split('')
    .join('')
    .split(',');
  for (let i = 0; i < args.length; i++) {
    if (args[i] === 'true') {
      args[i] = true;
    } else if (args[i] === 'false') {
      args[i] = false;
    } else if (parseFloat(args[i])) {
      args[i] = parseFloat(args[i]);
    }
  }
  return console.log(args);
};

concat([1, 2, 3], [4, 5], [6, 7]);
