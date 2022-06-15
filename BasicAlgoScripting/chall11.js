/*
Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.


*/

function titleCase(str) {
  str = str.toLowerCase();
  console.log(str);
  str = str.split(" ");
  let str3 = [];
  for (let i = 0; i < str.length; i++) {
    let str2 = str[i];
    str3.push(str2.replace(str2[0], str2[0].toUpperCase()));
  }
  str = str3.join(" ");
  return str;
}

titleCase("sHoRt AnD sToUt");