
function destroyer(arr) {
var args = [];
  for(var i=1;i<arguments.length;i++) {
    args.push(arguments[i]);
  }
  var flag = false;
  var filtered = arr.filter(function(val) {
    flag = false;
    for(var i = 0;i<args.length;i++) {
      if(args[i] != val) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
    return flag;
  });
  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
