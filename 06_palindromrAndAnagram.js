console.log("======================Question 1======================");

function palindrom(str) {
  let char = str.split("");
  let a = " ";

  for (let index1 = 0; index1 < char.length; index1++) {
    a = char[index1];
  }
  let b = " ";
  for (let index = char.length; index >= 0; index--) {
    b = char[index];
  }

  if (a == b) {
    console.log(`Given string ${str} is palindrome`);
  } else {
    console.log(`Given string ${str} is not palindrome`);
  }
}

palindrom("madam");
palindrom("dad");
palindrom("hello");

console.log("================Question 2==================");

function checkaAnagram(str1, str2) {
  let str1length = str1.length;
  let str2length = str2.length;

  if (str1length != str2length) {
    console.log("Invalid Input...");
  }

  let a = str1.split("").sort().join("");
  let b = str2.split("").sort().join("");

  if (a == b) {
    console.log(`${str1} and ${str2} are Anagram`);
  } else {
    console.log(`${str1} and ${str2} are not Anagram`);
  }
}

checkaAnagram("silent", "listen");
checkaAnagram("hello", "world");
checkaAnagram("such", "much");
