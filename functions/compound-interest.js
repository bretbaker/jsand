const compoundInterest = (p, t, r, n) => {
  // return parseFloat((p * Math.pow(1 + r / n, n * t)).toFixed(2));
  console.log(parseFloat((p * Math.pow(1 + r / n, n * t)).toFixed(2)));
};

compoundInterest(100000, 20, 0.15, 365);
