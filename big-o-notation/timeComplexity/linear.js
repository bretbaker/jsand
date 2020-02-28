// O(n), O(2n), O(3n)... O(n + 1), O(2n + 2)... || Linear

// This function takes a number n and returns the sum of every integer from 0 to n

// It is considered 'linear' because as n grows, the time and space required to complete
// this function grows

// Linear functions are middle of the road, faster than quadratic/exponential functions
// but much slower than logarithmic fuctions
// They are not acceptable in the real world unless there is no other option yet available

const addUpTo = n => {
  let sum = 0;
  for (let i = 0; i < n + 1; i++) {
    sum += i;
  }
  return sum;
};
