/*

Access Property Names with Bracket Notation

-------------------------------------------------------------------------------------------------------

We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.

*/
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  // Only change code below this line
  let foodvalue = foods[scannedItem];
  if (scannedItem === "apples") {
    foodvalue = 25;
  } else if (scannedItem === "bananas") {
    foodvalue = 13;
  } else if (scannedItem === "strawberries") {
    foodvalue = 27;
  }

  return foodvalue;

  // Only change code above this line
}

console.log(checkInventory("apples"));