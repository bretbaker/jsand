const outer = input => {
  let outerScopedVariable = [];
  const helper = helperInput => {
    // modify the outerScopedVariable
    outerScopedVariable.push(helperInput);
    helper(helperInput--);
  };
  helper(input);
  return outerScopedVariable;
};
