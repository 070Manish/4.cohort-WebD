// //Higher Order Function -> A function which takes another function as argument or return function from it is called higher order function

// //Example 1:
// function x()
// {
//     console.log("Namaste");
// }

// function y(x)
// {
//     x();
// }

// //Here y is higher order function  and x is call back function

// //Example 2
// const radius = [3, 1, 2, 4]
// const calculateArea = function ()
// {
//     const op = [];
//     for(let i=0;i<radius.length;i++)
//     {
//         op.push(Math.PI * radius[i] * radius[i]);
//     }
//     return op;
// }

// console.log(calculateArea());

// const circuference = function(radius)
// {
//     const op =[];
//     for(let i=0;i<radius.length;i++)
//     {
//         op.push(2 * Math.PI * radius[i]);
//     }
//     return op;
// };
// console.log(circuference(radius));

// const calculateDiameter = function(radius)
// {
//     const op = [];
//     for(let i=0;i<radius.length;i++)
//     {
//         op.push(2 * radius[i]);
//     }
//     return op;
// };
// console.log(calculateDiameter(radius));

//using order function :
const radius = [3, 1, 2, 4];

const area = function(radius)
{
    return Math.PI * radius * radius;
};

const circuference = function(radius)
{
    return 2 * Math.PI * radius;
};

const diameter = function(radius)
{
    return 2 * radius;
};

const calculate = function(radius, logic)
{
    const op = [];
    for(let i=0;i<radius.length;i++)
    {
        op.push(logic(radius[i]));
    }
    return op;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circuference))
console.log(calculate(radius, diameter));