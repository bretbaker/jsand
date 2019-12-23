const convDate = date => {
  let d = new Date(date);
  console.log(d.getMonth());
  console.log(d.getDate());
  console.log(d.getFullYear());
  let a = [];
  a.push(d.getMonth() + 1, d.getDate(), d.getFullYear());
  console.log(a);
};

convDate('January 9, 2019');
