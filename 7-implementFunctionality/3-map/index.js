/* Implement the following methods -
- Map
Using only for(), array and objects (without other js methods) */

function myMap(arr, callback) {
  const returnArr = [];
  for (const element of arr) {
    returnArr.push(callback(element));
  }
  return returnArr;
}
