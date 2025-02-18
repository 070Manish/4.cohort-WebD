//Problem 1: Create an object representing a type of tea with properties for name, type, and caffeine content.
let tea =
{
    name : "green Tea",
    type : "Bitter",
    caffeine_content : "High",
}

//Problem 2: Acess and print the named and type properties of the tea object.
console.log(tea.name, tea.type);

//Problem 3: Add a new property origin to the tea object.
tea["origin"] = "Allahabad";
console.log(tea);

//Problem 4: Change the caffeine level of the tea object to "Medium".
tea.caffeine_content = "Medium";
console.log(tea);

//Problem 5: Remove the type property from the tea object.
delete tea.type;
console.log(tea);

//Problem 6: Check if the tea object has a property origin.
if(tea.origin)
{
    console.log("Yes Property Exist");
}
else
{
    console.log("I dont have Property");
}
//Problem 7: Use a for...in loop to print all properties of the tea object.
for(let it in tea)
{
   console.log(it, tea[it]);
}

//Problem 8: Create a nested object representing different types of teas and their properties.
let tea1 = 
{
    name : "black Tea",
    types :
    {
        type1 : "Black",
        type2 : "Green",
    }
}
console.log(tea1);