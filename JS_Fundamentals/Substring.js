// Return true if the 'substring' is a part of the 'searchString'.
function isSubstring(searchString, subString) {
  const subStrings = searchString.split(' ');
  for (str of subStrings) {
    if (str === subString) {
      console.log('true');
      return;
    }
  }
  console.log('false');
}

// Test
isSubstring("time to program", "time");  // true
isSubstring("Jump for joy", "joys");  // false