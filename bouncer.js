
function bouncer(arr) {
   var newarr = arr.filter(function(val) {
    return Boolean(val);
  });
  return newarr;
}

bouncer([7, "ate", "", false, 9]);
