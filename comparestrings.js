
function mutation(arr) {
  var str = arr[1];
  var flag = false;
  for(var i=0;i<str.length;i++) {
    for(var j=0;j<arr[0].length;j++) {
        if(str[i].toLowerCase() == arr[0][j].toLowerCase()) {
          flag = true;
          break;
        } else {
          flag = false;
          continue;
          }
        }
    if(!flag) {
      return false;
    }
   }
  return flag;
}

mutation(["hello", "hey"]);
