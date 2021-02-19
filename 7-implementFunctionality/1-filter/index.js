/* Implement the following methods -
- Filter
Using only for(), array and objects (without other js methods) */

function myFilter(arr, callback) {
  const returnArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (callback.length === 1) {
      if (callback(arr[i])) {
        returnArr.push(arr[i]);
      }
    } else if (callback.length === 2) {
      if (callback(arr[i], i)) {
        returnArr.push(arr[i]);
      }
    } else if (callback.length === 3) {
      if (callback(arr[i], i, arr)) {
        returnArr.push(arr[i]);
      }
    }
  }
  return returnArr;
}
