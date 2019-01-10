// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  // var i = 0;
  arr.forEach(function(element) {
    if (element === "Waldo"){
      // found(i);
      found(arr.indexOf(element));
    }
    // i ++;
  });
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
      
  //     found(i);   // execute callback
  //   }
  // }
}

function actionWhenFound(number) {
  console.log("Found Waldo at index "+ number);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);