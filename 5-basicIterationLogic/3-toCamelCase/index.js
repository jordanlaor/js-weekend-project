/* Complete the method/function so that it converts dash/underscore delimited words into camel
casing. The first word within the output should be capitalized only if the original word was
capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior" */

function toCamelCase(str) {
  const words = str.split(/[-_]/);
  for (let i = 1; i < words.length; i += 1) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join('');
}
