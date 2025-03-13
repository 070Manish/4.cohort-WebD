function checkTruthValue(value)
{
    if(value)
    {
        return "Truthy";
    }
    else
    {
        return "Falsy";
    }
}

console.log(checkTruthValue(1));
console.log(checkTruthValue(0));
console.log(checkTruthValue("Manish"));
console.log(checkTruthValue(""));
console.log(checkTruthValue([]));