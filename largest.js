
function largestOfFour(arr) {
  // You can do this!
 var newarr = [];
  for(var i=0;i<arr.length;i++) {
    var max = 0;
    for(var j =0;j<arr[i].length;j++) {
      if(max<arr[i][j]) {
        max = arr[i][j];
      }
    }
    newarr.push(max);
  }
  return newarr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
