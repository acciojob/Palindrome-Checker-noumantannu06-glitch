// complete the given function

function palindrome(str){

  const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  
  const reversedStr = cleanStr.split('').reverse().join('');
  

  return cleanStr === reversedStr;
}
module.exports = palindrome
