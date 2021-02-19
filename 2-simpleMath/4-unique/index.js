/* There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers. */
const findUnique = (arr) => {
  arr.sort((a, b) => a - b);
  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
};

const findUniqueV2 = (arr) => {
  const results = arr.map((value, index, arr) => {
    const result = [];
    if (index !== 0 && index !== arr.length - 1) {
      result.push(value - arr[index - 1]);
      result.push(value - arr[index + 1]);
    }
    if (index === 0) {
      result.push(value - arr[arr.length - 1]);
      result.push(value - arr[index + 1]);
    }
    if (index === arr.length - 1) {
      result.push(value - arr[index - 1]);
      result.push(value - arr[0]);
    }
    return result;
  });
  return arr[results.findIndex((element) => element[0] && element[1])];
};
