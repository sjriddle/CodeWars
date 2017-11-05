function humanReadable(input) {
    var hrs = Math.floor(input/3600);
    var mins = Math.floor((input - hrs*3600)/60);
    var secs = Math.floor(input - hrs*3600 - mins*60);
    hrs_pad = hrs > 9 ? hrs : "0" + hrs;
    mins_pad = mins > 9 ? mins : "0" + mins;
    secs_pad = secs > 9 ? secs : "0" + secs;
    return hrs_pad + ":" + mins_pad + ":" + secs_pad;
  }
  
  // Best solution
  
  function humanReadable(seconds) {
    var pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
           pad(parseInt(seconds / 60 % 60)) + ":" +
           pad(seconds % 60)
  }