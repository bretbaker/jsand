const countDown = num => {
  if (num <= 0) {
    return console.log('All done!');
  }
  console.log(num);
  num--;
  countDown(num);
};
