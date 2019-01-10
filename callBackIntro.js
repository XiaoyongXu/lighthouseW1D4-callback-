// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element) {
    if (element === "Waldo"){
      found(arr.indexOf(element));
    }
  });
}

function actionWhenFound(number) {
  console.log("Found Waldo at index "+ number);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);