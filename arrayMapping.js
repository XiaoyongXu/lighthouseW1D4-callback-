var input = [
    { x: 3, y: 4 },
    { x: 12, y: 5 },
    { x: 8, y: 15 }
  ];
  var result = input.map(z => (Math.pow((Math.pow(z.x,2)+Math.pow(z.y,2)),0.5)));
  console.log(result[0]);
  console.log(result[1]);
  console.log(result[2]);
  console.log(result[0] === 5);
  console.log(result[1] === 13);
  console.log(result[2] === 17);