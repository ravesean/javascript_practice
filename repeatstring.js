
function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num<0) {
    return '';
  } 
  var s = str;
  for(var i=0;i<num-1;i++) {
    str+=s;
  }
  return str;
}

repeatStringNumTimes("abc", 3);
