Function.prototype.describe = function()
{
    console.log(`Function name is ${this.name}`);
    //this.greet-> points to function name
}

function greet(name)
{
    console.log(greet.name);
    console.log(`Hello ${name}`);
}

greet("Manish");//op->greet
                //    Hello Manish
greet.describe();//op->Function name is greet


