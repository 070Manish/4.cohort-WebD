// function changeBackgroundBlack()
// {
//     document.body.style.backgroundColor = "Black";
// }

// function changeBackgroundWhite()
// {
//     document.body.style.backgroundColor = "White";
// }
//this voilate DRY principle from SOLID it repeating

function changeBackground(color)
{
     document.body.style.backgroundColor = color;
}

const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', ()=>
{
    console.log(document.body.style.backgroundColor);
    const currentColor = document.body.style.backgroundColor;

    if(currentColor != "black")
    {
        changeBackground("black");
         //or we can do this instead of calling function
        // document.body.style.backgroundColor = "black";
        themeButton.innerText = "Change to Light Mode";      
    }
    else
    {
        changeBackground("white");
        themeButton.innerText = "Change to Dark Mode";
    }
});