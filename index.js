// Read input from the user
const billAmount = parseFloat(prompt("Enter the total bill amount:"));
const serviceQuality = parseInt(prompt("Enter the level of satisfaction (1-5):"));
const numPeople = parseInt(prompt("Enter the number of people:"));

// Calculate the tip per person
const tip = (billAmount * (serviceQuality / 100)) / numPeople;

// Print the result
console.log(`Tip per person: ${tip.toFixed(2)}`);

