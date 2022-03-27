import { allElementSame } from "./helper";
export default function getWinner(squares, scale) {
  const dimension = Math.pow(scale, 2);
  const width = dimension / scale;
  // Check for win by row
  for (let i = 0; i < dimension; i += 1) {
    // iterate over entire board
    if (i % width == 0) {
      var checkRow = [];
      for (var squareNum = i; squareNum < i + width; squareNum += 1) {
        // iteration over rows
        checkRow.push(squares[squareNum]);
      }
      if (allElementSame(checkRow.slice(0, scale)) == true) {
        return checkRow[0];
      }
    }
  }
  // check column
  for (let i = 0; i < dimension; i += 1) {
    if (i < width) {
      var colCheck = [];
      for (var squareNum = i; squareNum < dimension; squareNum += width) {
        // iterate over columns
        colCheck.push(squares[squareNum]);
      }
      if (allElementSame(colCheck)) {
        return colCheck[0];
      }
    }
  }
  // Check diagonal

  var diagonal = [];
  for (let i = 0; i < dimension; i += 1) {
    // iterate over board
    if (i % (width + 1) == 0) {
      // check diagonal
      diagonal.push(squares[i]);
    }
  }
  if (allElementSame(diagonal)) {
    return diagonal[0];
  }

  // Check counterdiagonal

  var counterdiag = [];
  for (let i = width - 1; i < dimension - 1; i += 1) {
    if (i % (width - 1) == 0) {
      counterdiag.push(squares[i]);
    }
  }
  if (allElementSame(counterdiag)) {
    return counterdiag[0];
  }
}
