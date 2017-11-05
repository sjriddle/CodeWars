function recoverSecret (triplets) {
    var first = '', secret = '';
    for (var i = 0; i < triplets.length; i++) {
      first = triplets[i][0];
      for (var j = 0; j < triplets.length; j++) {
        if (triplets[j][1] == first || triplets[j][2] == first) break;
        if (j === triplets.length - 1) {
          secret += first;
          for (var k = 0; k < triplets.length; k++) {
            if (triplets[k][0] == first) triplets[k].splice(0,1);
          }
          i = 0;  
        }
      }
    }
    return secret;
  }
  
  // Best-rated solution
  
  var recoverSecret = function(triplets) {
    for(var [first] of triplets)
    {
      if (triplets.every(tuple => tuple.indexOf(first) <= 0))
      {
        triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
        return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
      }
    }
    return '';
  };