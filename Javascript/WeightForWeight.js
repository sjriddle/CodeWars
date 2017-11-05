function orderWeight(str) {
    if (str === "") return "";
    array = str.split(" ").map(Number).sort();
    var unsorted = [], sorted = [], converted = [];
    for (i=0; i<array.length; i++) {
      unsorted[i] = digitSum(array[i]);
    }
    sorted = unsorted.concat().sort(function(a, b){return a-b;});
    for (i=0; i<array.length; i++) {
      converted[i] = array[unsorted.indexOf(sorted[i])];
      delete unsorted[unsorted.indexOf(sorted[i])];
    }
    return converted.join(" ");
  }
  
  function digitSum(num) {
    var sum = 0;
    while (num > 0) {
      sum += num%10;
      num = Math.floor(num/10);
    }
    return sum;
  }
  
  // Best solution
  
  function orderWeight(strng) {
    return strng
      .split(" ")
      .map(function(v) {  
        return {
          val: v,
          key: v.split("").reduce(function(prev, curr) {
            return parseInt(prev) + parseInt(curr);
          }, 0)
        };
      })
      .sort(function(a, b) {
        return a.key == b.key 
          ? a.val.localeCompare(b.val)
          : (a.key - b.key);
      })
      .map(function(v) {
        return v.val;
      })
      .join(" ");
  }