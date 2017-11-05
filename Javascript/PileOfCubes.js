function findNb(m) {
    var sum = 0;
    var i = 1;
    while (sum <m) {
      sum = sum + Math.pow(i, 3);
      i++;
    }
    if (sum === m) {
      return (i-1);
    } else {
      return -1;
    }
  }
  
  // Best solution (tidied)
  
  function findNb(m) {
    var n = 0;
    while (m > 0) {
      n=n+1;
      m=m-Math.pow(n,3); 
    }
    return m ? -1 : n;
  }