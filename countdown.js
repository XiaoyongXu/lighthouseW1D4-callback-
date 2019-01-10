var countdownGenerator = function (x) {
  /* your code here */
  var count = x;
  return function(){
    if (x > 0) {
      console.log("T-mius " + x + "...");
      x = x - 1;
      return x;
    } else if (x === 0){
      console.log("Blast Off!");
      x = x - 1;
      return x;
    } else {
      console.log("Rockets already gone, bub!");
    }
    
  }

};
  
var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!