/*
Find the Longest Word in a String
*/

function findLongestWordLength(str) {
  str = str.split(" ");
  let strlength = [];
  for (let i in str) {
    let length = str[i].length;

    strlength.push(parseInt(length));
  }
  strlength.sort(function (a, b) {
    return a - b;
  });

  return strlength.pop();
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
