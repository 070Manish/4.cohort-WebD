//Problem1: Create an array containing different types of teas.
const teas = ["Green Tea", "Black Tea", "oolong Tea", "White Tea", "Herbal Tea",];
console.log(teas);

//Problem2: Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea");

//Problem3: Remove "oolong Tea" from the list of tea
const index = teas.indexOf("oolong Tea");
if(index > -1)
{
    teas.splice(index, 1);
}

//Problem4: Filter the list to only include teas that are caffeinated.(herbal tea chod ke sb caffineted tea hai)
const caffinetedTeas = teas.filter((tea) => tea !== "Herbal Tea");

//Problem 5: Sort the list of teas in alphabetical order.
console.log(teas.sort());

//Problem 6: Use for loop to print each type of tea in the array
for(let i=0;i<teas.length; i++)
{
    console.log(teas[i]);
}

//Problem 7: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea").
let count = 0;
for(let i=0;i<teas.length;i++)
{
    if(teas[i] != "Herbal Tea")
    {
        count++;
    }
}
console.log(count);

//Problem 8: Use a for loop to create a new array with all tea names in uppercase
const uppCaseTeas = [];
for(let i=0;i<teas.length;i++)
{
    uppCaseTeas.push(teas[i].toUpperCase);
}

//Problem 9: Use a for loop to find the tea name with the most characters.
let longest = "";
for(let i=0;i<teas.length;i++)
{
    if(longest.length < teas[i].length)
    {
        longest = teas[i];
    }
}
console.log(longest);

//Problem 10: Use a for loop to reverse the oreder of teas in the array

const reversedArray = [];
for(let i=teas.length-1;i>=0;i--)
{
    reversedArray.push(teas[i]);
}
console.log(reversedArray);