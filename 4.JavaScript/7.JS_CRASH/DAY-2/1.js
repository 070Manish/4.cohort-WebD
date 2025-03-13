let expenses = [
    {description: "Groceries", amount:50, category: "Food"},
    {description: "Electricity Bill", amount:100, category: "Utilities"},
    {description: "Dinner", amount:30, category: "Food"},
    {description: "Internet Bill", amount:50, category: "Utilities"},
]


let expenseReport = expenses.reduce((report, expense) => {
     report[expense.category] += expense.amount;
     return report;
    },{Food:0, Utilities:0}
)
console.log(expenseReport);


let tasks = [
    {description:"Write Report", completed: false, priority:2},
    {description:"Send Email", completed: true, priority:3},
    {description:"Prepare Presentation", completed: false, priority:1},
];

let pendingSortedTasks = tasks
    .filter((task) => !task.completed)
    .sort((a, b) => a.priority - b.priority);

console.log(pendingSortedTasks);



let movieRatings = [
    {title: "Movie A", ratings: [4, 5, 3]},
    {title: "Movie B", ratings: [5, 5, 4]},
    {title: "Movie C", ratings: [3, 4, 2]},
];

let averageRatings = movieRatings.map((movie) => {
    let total = movie.ratings.reduce((sum, ratings)=>
        sum + ratings, 0
    );
    let average = total / movie.ratings.length;
    return {title: movie.title, averageRatings: average.toFixed(2)}
});

console.log(averageRatings)