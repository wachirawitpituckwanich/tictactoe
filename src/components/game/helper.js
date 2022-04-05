export function allElementSame(array) {
    var first = array[0];

    if (array[0] == null) {
      return false;
    } else {
      return array.every(function (element) {
        return element == first;
      });
    }
  }
