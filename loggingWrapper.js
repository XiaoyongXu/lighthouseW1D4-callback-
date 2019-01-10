var wrapLog = function (callback, name) {
  /* your code here */
  // var test = callback;
  function wrappedFunction(){
    var args = Array.from(arguments).join(" , ");
    var result = callback.apply(null, arguments);
    // if (name === "area"){
    //   result = callback.apply(null, arguments);
    // }else if (name === "volume"){
    //   result = callback(arguments[0],arguments[1],arguments[2]);
    // } 
    console.log(name + "(" +args+ ") => " + result);
    return result;
}
  return wrappedFunction;
};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24