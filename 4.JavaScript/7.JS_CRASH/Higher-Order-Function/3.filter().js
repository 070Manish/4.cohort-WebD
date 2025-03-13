const arr = [5, , 3, 2, 6];

//1.Filter odd values
function isOdd(x)
{
    return x % 2 === 1;
}
const op1 = arr.filter(isOdd);
console.log(op1);

//another way to write is
const op2 = arr.filter(function Odd(x)
{
    return x % 2 === 1;
})
console.log(op2);

//anather way to write is 
const op3 = arr.filter((x) => x%2 === 1)
console.log(op3);