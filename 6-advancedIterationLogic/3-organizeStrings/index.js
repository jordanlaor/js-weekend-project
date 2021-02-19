/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the
longest possible, containing distinct letters,
each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

function longest(a, b) {
  const aSet = Array.from(new Set(a.split('')));
  const bSet = Array.from(new Set(b.split('')));
  if (aSet.length > bSet.length) {
    return aSet.sort().join('');
  }
  if (bSet.length > aSet.length) {
    return bSet.sort().join('');
  }
  return { a: aSet.sort().join(''), b: bSet.sort().join('') };
}
