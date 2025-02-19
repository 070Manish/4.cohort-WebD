const display = document.getElementById("cal-input");
let buttons = document.querySelectorAll(".calculator button");
let ans = "";

buttons.forEach(button =>
{
    button.addEventListener("click", function()
    {
        let value = this.innerText;

        if(value == "C")
        {
            display.value = "";
        }
        else if(value === "=")
        {
            try
            {
                ans = eval(display.value);
                display.value = ans;
            }
            catch(error)
            {
                display.value = "Error";
            }
        }
        else if(value === "<-")
        {
            display.value = display.value.slice(0,-1);
        }
        else
        {
            display.value = display.value + value;
        }
    })
})