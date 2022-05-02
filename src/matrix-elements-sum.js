const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

 function getMatrixElementsSum(matrix) {
  let sum = 0;
  let column = matrix[0].length; console.log(column);
  let row = matrix.length; console.log(row);

  
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) { console.log(matrix[j][i])

      if (matrix[j] !== 0 && matrix[j+1] !== 0 && matrix[j+2] == 0) { console.log(matrix[j]);
          return sum += matrix[j][i] + matrix[j+1][i];
       }

      if (matrix[j][i] !== 0 && matrix[j][i-j] !==0) { console.log(matrix[j][i-j]);
        sum += matrix[j][i];
      } 
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
