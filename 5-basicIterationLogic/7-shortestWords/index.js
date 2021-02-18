/* Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types. */

function shortestWords(words) {
  return words.reduce((shortLength, word) => (word.length < shortLength ? word.length : shortLength), words[0].length);
}
