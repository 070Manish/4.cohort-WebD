let myArray = [1,2,3,4,5,6,7]

function add(myArray)
{
    let sum = 0;
    for(let i=0;i<myArray.length;i++)
    {
        sum = sum + myArray[i];
    }
    return sum;
}

console.log("Sum of Array is ",add(myArray));