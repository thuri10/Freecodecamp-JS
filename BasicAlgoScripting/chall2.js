/*
Reverse a String
*/





function reverseString(str) {
  let splittedstring = str.split("");
  splittedstring.reverse();
  str = splittedstring.join("");
  return str;
}

reverseString("hello");