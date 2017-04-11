
function getIndexToIns(arr, num) {
  arr.sort(function(a,b) {
    return a-b;
  });
  var i;
  for(i=0;i<arr.length;i++) {
    if(num>arr[i]) {
      continue;
    } else {
      break;
    }
  }
  return i;
}

getIndexToIns([40, 60], 50);
