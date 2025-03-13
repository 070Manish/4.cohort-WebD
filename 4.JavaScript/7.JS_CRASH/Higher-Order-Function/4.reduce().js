const fruits = ["apple", "banana", "apple", "orange"];

const fruitCount = fruits.reduce((acc, curr) => 
{
  // If fruit already exists, increment it
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(fruitCount);
// { apple: 2, banana: 1, orange: 1 }
