const arr = [1,2,3,4,5];

const initialValue = 0;
const sumWithInitial = arr.reduce
(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);
console.log(sumWithInitial);

let inventory = [
    {name : "Widget A", stock : 30},
    {name : "Widget B", stock : 120},
    {name : "Widget C", stock : 45},
    {name : "Widget D", stock : 70},
];


let lowStocksItems0 = inventory.filter((item) => {item.stock < 50});
console.log(lowStocksItems0);

let lowStocksItems1 = inventory.filter((item) => {
    return item.stock < 50
});
console.log(lowStocksItems1);

let lowStocksItems2 = inventory.filter((item) => item.stock < 50);
console.log(lowStocksItems2);

let lowStocksItems3 = inventory.filter((item) => (item.stock < 50));
console.log(lowStocksItems2);



let userActivity = [
    {user: "Alcie", activityCount: 45},
    {user: "Bob", activityCount: 72},
    {user: "Charlie", activityCount: 33},
];

let mostActiveUser = userActivity.reduce((maxUser, user) => 
    user.activityCount > maxUser.activityCount ? user : maxUser
);

console.log(mostActiveUser);