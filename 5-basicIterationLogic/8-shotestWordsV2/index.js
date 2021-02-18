/* Given a string of words, return the longest word[s].
String will never be empty and you do not need to account for different data types. */

function shortestWordsLength(words) {
  return words.reduce((shortLength, word) => (word.length < shortLength ? word.length : shortLength), words[0].length);
}

function shortestWords(words) {
  return words.filter((word, index, words) => word.length === shortestWordsLength(words));
}
