/*
Truncate a String
*/
function truncateString(str, num) {
  if (str.length > num) {
    let str1 = str.split("");
    str1.splice(num);
    let str3 = str1.join("");
    return String(str3) + "...";
  } else {
    return str;
  }
}

truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length + 2
);