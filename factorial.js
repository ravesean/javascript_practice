
function factorialize(num) {
  var n = num;
  if(num===0) {
    return 1;
  }
  for(var i=1;i<n;i++) {
    num*=i;
  }
  return num;
}

factorialize(5);
