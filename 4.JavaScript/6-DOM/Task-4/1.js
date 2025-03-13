document.getElementById("submit").addEventListener("click", function()
{
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value/100;

    if(isNaN(weight) || isNaN(height) || height<=0)
    {
        alert("Please Enter valid Numbers");
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("result").value = bmi;
    alert("Your BMI is " + bmi);
});
