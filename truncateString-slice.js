
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var appender = "...";
  if(num<=3) {
     str = str.slice(0, num);
     str+=appender;
  } else if(str.length > num) {
    str =str.slice(0, num-3);
    str+=appender;
  } 
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
