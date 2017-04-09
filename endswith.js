
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var s = str.substring(str.length-target.length,str.length);
  return target==s;
}

confirmEnding("Bastian", "n");
