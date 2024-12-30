function bar(a, b) {
  //Type checking and conversion for safe addition
  const numA = typeof a === 'number' ? a : parseInt(a, 10);
  const numB = typeof b === 'number' ? b : parseInt(b, 10);
  if(isNaN(numA) || isNaN(numB)){
    return "Invalid input: Non-numeric values encountered.";
  }
  return numA + numB;
}

console.log(bar(5, "5")); // Output: 10
console.log(bar("10", 20)); // Output: 30
console.log(bar("abc", 20)); //Output: Invalid input: Non-numeric values encountered.