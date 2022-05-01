const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let theBest;
  let array = [];
  let num = n.toString();
  for (let i = 0; i < num.length; i++) {
    array.push(num.slice(0, i) + num.slice(i+1));
    theBest = Math.max(...array);
  }
  return theBest;
}

module.exports = {
  deleteDigit
};
