/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  str=str.replace(/[^\w\s]|_/g,"");
  if(str==""){
    return true;
  }
  for(let i=0;i<str.length;i++){
    for(let j=str.length-1;j>=0;j--){
      if(str[i]==str[j]){
        return true;
      }
      else{
        return false;
      }
    }
  }
}

module.exports = isPalindrome;
