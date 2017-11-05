function dirReduc (arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] !== arr[i+1] && arr[i].length === arr[i+1].length) {
        arr.splice(i,2);
        i = -1;
      } 
    }
    return arr;
  }
  
  // Best-rated solution
  
  function dirReduc(plan) {
    var opposite = {
      'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return plan.reduce(function(dirs, dir){
        if (dirs[dirs.length - 1] === opposite[dir])
          dirs.pop();
        else
          dirs.push(dir);
        return dirs;
      }, []);
  }