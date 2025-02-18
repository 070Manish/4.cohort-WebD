const todoInput = document.getElementById("todo-input"); 
const addButton = document.getElementById("add-button");
const todoItemsContainer = document.getElementById("todo-items-container");

addButton.addEventListener("click", ()=>
{
    const value = todoInput.value;
    console.log("User Entered", value);

    const li = document.createElement("li")//<li></li> tag bn gaya
    li.innerText = value;//<li>{value}</li>
    
    const delButton = document.createElement("button");
    delButton.innerText = "X"; 
    li.appendChild(delButton)//li tag me "X" daal diye

    delButton.addEventListener("click", function()
    {
        li.remove();
    })

    todoItemsContainer.appendChild(li);
    todoInput.value = "";//Clear the input after adding
}); 