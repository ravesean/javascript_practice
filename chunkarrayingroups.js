
function chunkArrayInGroups(arr, size) {
  var finalarr = [];
  var str = arr.join('');
  var i =0;
  while(i<str.length) {
    var newarr = [];
    for(j=i;j<i+size && j<str.length;j++) {
      newarr.push(arr[j]);
    }
    finalarr.push(newarr);
    i+=size;
  }
  return finalarr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
