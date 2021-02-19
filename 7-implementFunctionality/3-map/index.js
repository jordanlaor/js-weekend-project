/* Implement the following methods -
- Map
Using only for(), array and objects (without other js methods) */

function myMap(arr, callback) {
  const returnArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (callback.length === 1) {
      returnArr.push(callback(arr[i]));
    } else if (callback.length === 2) {
      returnArr.push(callback(arr[i], i));
    } else if (callback.length === 3) {
      returnArr.push(callback(arr[i], i, arr));
    }
  }
  return returnArr;
}
