
function titleCase(str) {
  str = str.toLowerCase();
  var array = str.split(" ");
  for(var i =0; i<array.length;i++) {
    
    var s = array[i].split('');
    s[0] = s[0].toUpperCase();
    var newStr = s.join('');
    array[i] = newStr;
  }
  str = array.join(' ');
  return str;
}

titleCase("I'm a little tea pot");
