/* Write a function called repeat_str which repeats the given string src exactly count times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" */

function repeat_str(n, str) {
  return str.repeat(n);
}

function repeat_str_no_repeat(n, str) {
  let count = 1;
  const original = str;
  while (count < n) {
    count += 1;
    str += original;
  }
  return str;
}
