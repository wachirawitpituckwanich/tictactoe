export function allElementSame(array) {
    // Ultimately got this solution from stack overflow, I had a lot of difficulty getting it to work on my own

    var first = array[0];

    if (array[0] == null) {
      return false;
    } else {
      return array.every(function (element) {
        return element == first;
      });
    }
  }