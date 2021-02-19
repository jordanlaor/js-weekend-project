/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
a function that determines whether a string that contains only letters is an isogram. Assume the
empty string is an isogram. Ignore letter case.
isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case */

function isIsogram(str) {
  return str
    .toLowerCase()
    .split('')
    .reduce((isIso, char, index, arr) => {
      if (isIso) {
        return arr.filter((arrChar) => arrChar === char).length > 1 ? false : isIso;
      }
      return isIso;
    }, true);
}
