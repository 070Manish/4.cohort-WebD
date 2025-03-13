// let num = "a42a";//bht br ish formate me data ata API se

// let convertedNum = Number(num);//so we have to convert it alsways
// console.log(typeof num)
// console.log(convertedNum);//if vo number nh haio to usko age mt bdhne do
// console.log(typeof convertedNum);

// let  convertedNum1 = Number(num);

// let convertedNum2 = +num;

// let convertedNum3 = parseInt(num);

// console.log(convertedNum1);
// console.log(convertedNum2);
// console.log(convertedNum3)

let str = 123;
console.log(typeof str);
let convertedString = String(str);
console.log(typeof convertedString);
console.log(str);
console.log(convertedString);

let a = 10;
let b = 3;

let sum = a + b;
console.log(sum);

let difference = a- b;
console.log(difference);

let quotient = a / b;
console.log(quotient);

let remainder = a % b;
console.log(remainder);

let pow = a ** b;
console.log(pow);



let x = 5;
let y = 10;

console.log(x == y);// Equal to
console.log(x != y);// Not Equal to
console.log(x > y);// Greater than
console.log(x < y);// Less than
console.log(x <= y)// Less than equal to
console.log(x >= y)// Greater than equal to


console.log(Math.max(5, 10));
console.log(Math.min(5, 10));
console.log(Math.random());
console.log(Math.random() * 10);


let arr0 = [1,2,3];
let arr1 = [4,5];
let arr2 = arr0.concat(arr1);//1st way

let arr3 = [...arr2, 6];//2nd way ...spread kr deta array ko

console.log(arr2);
console.log(arr3);

let chaiRecipe = 
{
    name : "Masala Chai",
    ingredients :
    {
        teaLeaves : "Assam Tea",
        milk : "Full Cream Milk",
        sugar : "Brown Sugar",
        spices : ["Daalchini", "Gineger"],
    },
    instructions : "Boil water, add tea leaves, milk, sugar and spices",
};

//1. Direct Access
console.log(chaiRecipe.ingredients.spices[1]);

//2.
let updatedChaiRecepie = 
{
    ...chaiRecipe,//ishe array spread kr diye
    instructions: "Boil water, add tea leaves, mil sugar, spices with some love",//ishe override kr diye
}
console.log(chaiRecipe.instructions);
console.log(updatedChaiRecepie.instructions);

//3.
//we are doi9ng just mapping mapping variable to objects variable
let {name, ingredients} = chaiRecipe;// object destructuring
let [firstChai, secondChai] = arr1;//array destructuring

console.log(name);
console.log(ingredients);