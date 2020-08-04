const rect = require('./rectangle')

function solvRect(l, w) {
  console.log(`Solving for rectangle dimensions: ${l}, ${w}`);

  if (l <= 0 || w <= 0) {
    console.log(`Rectangle dimensions must be greater than zero, Received: ${l} ,${w}`)
  } else {
    console.log(`Area of rectangle: ${rect.area(l,w)}`);
    console.log(`Perimeter of rectangle: ${rect.perimeter(l,w)}`)
  }
}

solvRect(2,4);
solvRect(3,5);
solvRect(0,5);
solvRect(5,-3);