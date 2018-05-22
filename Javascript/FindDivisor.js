function divisors(int) {
    let out = [];
    for(let i=2; i<int; i++) {
      if(int%i === 0) {
          out.push(i);
      }
    }
    return out.length === 0 ? `${int} is prime` : out;
  }
