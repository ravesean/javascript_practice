
function palindrome(str) {
  // Good luck!
  str = str.replace(/[^A-Z0-9]/ig,"").toLowerCase();
  var array = str.split("");
  array.reverse();
  var revStr = array.join("");
  if(str == revStr) {
     return true;   
  }
  return false;
}

palindrome("eye");
