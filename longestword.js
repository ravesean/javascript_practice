
function findLongestWord(str) {
  var array = str.split(" ");
  var length = 0;
  var index = 0;
  for(var i=0;i<array.length;i++) {
    if(length < array[i].length) {
      length = array[i].length;
      index = i;
    }
  }
  str = array[index];
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
