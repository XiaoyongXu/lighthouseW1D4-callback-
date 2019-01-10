var words = ["ground", "control", "to", "major", "tom"];

function map(array,doMapping){
  var newArr = [];
  array.forEach(function(element) {
    newArr.push(doMapping(element));
  });
  console.log(newArr);
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});