
function largestOfFour(arr) {
  // You can do this!
  var max = 0;
  
    arr = arr.filter(function(elem) {
      for(var i=0;i<elem.length;i++) {
        if(max<elem[i]) {
          max = elem[i];
        }
      }     
    });
  
  return max;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
