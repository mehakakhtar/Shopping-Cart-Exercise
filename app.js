console.log(" Welcome to Our Shop! ");

let itemName = prompt("Enter the name of the item you are buying:");
let itemPrice = parseInt(prompt("Enter the price of the item:"));
let quantity = parseInt(prompt("Enter the quantity you are purchasing:"));

let subtotal = itemPrice * quantity;

console.log(`You are buying ${quantity} ${itemName}(s) at ${itemPrice} each.`);
console.log(`Your subtotal is: ${subtotal}`);
