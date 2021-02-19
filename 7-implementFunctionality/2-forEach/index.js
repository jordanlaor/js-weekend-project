/* Implement the following methods -
- ForEach
Using only for(), array and objects (without other js methods) */

function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback.length === 1) {
      callback(arr[i]);
    } else if (callback.length === 2) {
      callback(arr[i], i);
    } else if (callback.length === 3) {
      callback(arr[i], i, arr);
    } else {
      return undefined;
    }
  }
}
