const arr = [5, 1, 3, 2, 6];

//1.Dobule
function double(x)
{
    return x*2;
}
const op = arr.map(double);
console.log(op);

//2.Triple
function triple(x)
{
    return x*3;
}
console.log(arr.map(triple)) 

//3.Binary
function binary(x)
{
    return x.toString(2);
}
const op1 = arr.map(binary)
console.log(op1);

//another way to write is->using higher order function
const op2 = arr.map(function binary(x)
{
    return x.toString(2);
})
console.log(op2);


//another way to write function->arrow function
const op3 = arr.map((x) => x.toString(2));
console.log(op3);