function printChai()
{
    console.log("Hello From Chai");
}

function bringBrush(numOfBrush)
{
    console.log(`Hanji, le aaya ${numOfBrush} brush`);
}

function addTwo(num1, num2)
{
    return num1+num2;
}

bringBrush(4);
printChai();

var result = addTwo(1,2);
console.log(result);
console.log("addition = ",addTwo(3,2));