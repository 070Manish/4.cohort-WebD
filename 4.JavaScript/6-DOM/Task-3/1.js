
let display = document.getElementById("cal-input");
let buttons = document.querySelectorAll(".calculator button");
let lastAnswer = "";

buttons.forEach(button => 
{
    button.addEventListener("click", function () 
    {
        let value = this.innerText;
            
        if (value === "C") 
        {
            display.value = ""; // Clear display
        } 
        else if (value === "=") 
        {
            try 
            {
                lastAnswer = eval(display.value); // Evaluate expression
                display.value = lastAnswer;
            } 
            catch (error) 
            {
                display.value = "Error";
            }
        } 
        else if (value === "<-") 
        {
            display.value = display.value.slice(0, -1); //Remove last element from display
        } 
        else 
        {
            display.value = display.value + value; // Append clicked value
        }
    }); 
});

