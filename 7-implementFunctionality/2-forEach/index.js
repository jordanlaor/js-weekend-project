/* Implement the following methods -
- ForEach
Using only for(), array and objects (without other js methods) */

function myForEach(arr, callback) {
  for (const element of arr) {
    callback(element);
  }
}
