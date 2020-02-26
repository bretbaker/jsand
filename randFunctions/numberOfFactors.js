const factors = n => {
  let a = [...Array(n + 1).keys()];
  console.log(a);
  a = a.filter(i => n % i === 0);
  console.log(a);
};

factors(20);
