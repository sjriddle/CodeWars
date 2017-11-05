function iqTest(numbers){
    var arrayNum = numbers.split(" ").map(Number);
    if (arrayNum[0]%2 !== arrayNum[1]%2 && arrayNum[0]%2 !== arrayNum[2]%2) {
      return 1;
    }
    else {
      for (var i=1; i<arrayNum.length; i++) { 
        if (arrayNum[i]%2 !== arrayNum[0]%2) {
          return (i+1);
        }
      }
    }
  }
  
  // Best solution
  
  function iqTest(numbers){
    numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  
    var odd = numbers.filter(function(el){ return el % 2 === 1});
    var even = numbers.filter(function(el){ return el % 2 === 0});
  
    return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
  }