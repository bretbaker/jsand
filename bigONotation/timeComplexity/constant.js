// O(1), O(2), O(3)... || Constant

// This function takes a number n and returns the sum of every integer from 0 to n

// It is considered 'constant' because there will always only be 3 operations done
// no matter the size of n

// Constant functions are the fastest possible
// They are very acceptable in the real world

const addUpTo = n => {
  return (n * (n + 1)) / 2;
};
