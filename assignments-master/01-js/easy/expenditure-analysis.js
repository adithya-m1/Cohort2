/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = new Map();

  // Iterate through each transaction
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    // If category is not in the map, add it with the current price
    if (!categoryMap.has(category)) {
      categoryMap.set(category, price);
    } else {
      // If category is already in the map, update the total price
      categoryMap.set(category, categoryMap.get(category) + price);
    }
  });

  // Convert the map to an array of objects
  const result = Array.from(categoryMap, ([category, totalSpent]) => ({
    category,
    totalSpent,
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
