const reverse = str => {
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > 4) {
      str[i] = str[i].split('');
      let a = [];
      for (let j = str[i].length - 1; j > -1; j--) {
        a.push(str[i][j]);
      }
      str[i] = a.join('');
    }
  }
  return console.log(str.join(' '));
};

reverse(
  'Reverse the order of every word greater than or equal to five characters.'
);
