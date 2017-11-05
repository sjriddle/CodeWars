function deleteNth(arr, x) {
    var filtered = [];
    for (i = 0; i < arr.length; i++) {
      if (filtered.filter(function(y) {return y == arr[i]}).length <= (x-1)) {
        filtered.push(arr[i]);
      }
    }
    return filtered;
  }
  
  // Best solution
  
  function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
  }