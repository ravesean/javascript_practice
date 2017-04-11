
function rot13(str) { // LBH QVQ VG!
  var newstr = "";
  for(var i =0;i<str.length;i++) {
    var pattern = /[a-z]/gi;
    if(str[i].match(pattern)) {
      if(str.charAt(i).toUpperCase() < 'N' ) {
        newstr+=String.fromCharCode(str.charCodeAt(i)+13);
      } else if(str.charAt(i).toUpperCase() > 'M') {
        newstr+=String.fromCharCode(str.charCodeAt(i)-13);
      } 
    } else {
      newstr+=str[i];
    }
    
  }
  return newstr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
