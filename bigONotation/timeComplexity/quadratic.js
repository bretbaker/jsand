// O(n^2), O(2n^2), O(3n^2)... O(n^2 + 5n + 8)... || Quadratic

// This function contains a loop with a nested loop inside
// The nested loop runs once for each iteration of the parent loop

// As n grows, the time and space this function requires grows exponentially to the power of 2

// Quadratic functions are considered very slow
// and are not acceptable in the real world

const printAllPairs = n => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};
