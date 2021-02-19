/* Implement the following methods -
- Filter
Using only for(), array and objects (without other js methods) */

function myFilter(arr, callback) {
  const returnArr = [];
  for (const element of arr) {
    if (callback(element)) {
      returnArr.push(element);
    }
  }
  return returnArr;
}
