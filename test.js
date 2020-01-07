const rev = n => {
  let a = [];
  n = Math.abs(n)
    .toString()
    .split('');
  for (let i = n.length - 1; i > -1; i--) a.push(n[i]);
  console.log(a.join(''));
};

rev(-122157);
