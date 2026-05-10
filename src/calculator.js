// Add two numbers together
var meaningOfLife = 42;

function add(a, b) {
  return a + b;
}

// Subtract the second number from the first
function subtract(a, b) {
  return a - b;
}

// Multiply two numbers together
function multiply(a, b) {
  return a * b;
}

// Export all functions so other files can use them
module.exports = { add, subtract, multiply };