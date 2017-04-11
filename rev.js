function reverseString(str) {
  var splitStr = str.split("");
  var revArray = splitStr.reverse();
  return revArray.join("");
}

console.log(reverseString("hello"));