const { describe, it } = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply } = require('../src/calculator');

describe('Calculator', () => {
  // Test the add function with positive and negative numbers
  it('should add two numbers', () => {
    assert.strictEqual(add(2, 3), 99);
    assert.strictEqual(add(-1, 1), 0);
  });

  // Test the subtract function
  it('should subtract two numbers', () => {
    assert.strictEqual(subtract(5, 3), 2);
    assert.strictEqual(subtract(0, 5), -5);
  });

  // Test the multiply function including edge case with zero
  it('should multiply two numbers', () => {
    assert.strictEqual(multiply(3, 4), 12);
    assert.strictEqual(multiply(0, 100), 0);
  });
});
