// Constructor function for Shoes
function Shoe(name, productCode, quantity, valuePerItem) {
  this.name = name;
  this.productCode = productCode;
  this.quantity = quantity;
  this.valuePerItem = valuePerItem;
}

// Five instances of Shoes
const shoe1 = new Shoe("Boots", "3023", "32", "60");
const shoe2 = new Shoe("Trainers", "2347", "26", "70");
const shoe3 = new Shoe("Heels", "7821", "23", "50");
const shoe4 = new Shoe("Wellies", "4432", "13", "40");
const shoe5 = new Shoe("Sandals", "5353", "20", "30");

// Store the instances in an array
const shoesArray = [shoe1, shoe2, shoe3, shoe4, shoe5];

// Function to search for a shoe
function searchShoe(search) {
  const result = shoesArray.filter((shoeName) => shoeName.name === search);
  if (result.length > 0) {
    console.log(result);
  } else {
    console.log(`The item ${search} is not in our inventory`);
  }
}

// Function to search for lowest value
function findLowestValueShoe() {
  const lowestValue = shoesArray.reduce((min, shoe) =>
    shoe.valuePerItem < min.valuePerItem ? shoe : min
  );
  console.log([lowestValue]);
}

// Function to search for highest value
function findHighestValueShoe() {
  const highestValue = shoesArray.reduce((max, shoe) =>
    shoe.valuePerItem > max.valuePerItem ? shoe : max
  );
  console.log([highestValue]);
}

// Updated function to edit shoe properties
// Function to edit a specific shoe's properties by name
function changeShoeProperties(
  shoeName,
  newName,
  newProductCode,
  newQuantity,
  newValuePerItem
) {
  const shoeToEdit = shoesArray.find((shoe) => shoe.name === shoeName);
  if (shoeToEdit) {
    if (newName) shoeToEdit.name = newName;
    if (newProductCode) shoeToEdit.productCode = newProductCode;
    if (newQuantity) shoeToEdit.quantity = newQuantity;
    if (newValuePerItem) shoeToEdit.valuePerItem = newValuePerItem;

    console.log(`Updated properties of ${shoeName}:`);
    console.table([shoeToEdit]);
  } else {
    console.log(`Shoe named ${shoeName} not found in inventory.`);
  }
}

// Function to order shoes by value per item in ascending order
function orderShoesByValue() {
  const ordered = shoesArray
    .map((shoe) => shoe) // Create a new array using map
    .sort((a, b) => a.valuePerItem - b.valuePerItem);

  console.log("Shoes ordered by value per item in ascending order");
  console.table(ordered);
}

console.log("Inventory");
console.table(shoesArray);

console.log("\nSearch for: Boots");
searchShoe("Boots");

console.log("\nLowest Value Shoe");
findLowestValueShoe();

console.log("\nHighest Value Shoe");
findHighestValueShoe();

// Added shoeName
const shoeName = "Boots";
const newName = "Slippers";
const newProductCode = "7683";
const newQuantity = "15";
const newValuePerItem = "10";

console.log("\nChange Values");
changeShoeProperties(
  shoeName,
  newName,
  newProductCode,
  newQuantity,
  newValuePerItem
);

console.log("\nShoe ranking lowest to highest");
orderShoesByValue();
