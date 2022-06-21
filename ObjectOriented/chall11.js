/*
Iterate Over All Properties



Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.

*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let i in beagle) {
    //condition t check has own properties
  if (beagle.hasOwnProperty(i)) {
    ownProps.push(i);
  } else {
    prototypeProps.push(i);
  }
}
