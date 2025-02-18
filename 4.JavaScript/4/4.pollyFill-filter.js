const arr = [1, 2, 3, 4, 5, 6];

//filter
//Signatur: Return - new Array | input: userFn,
//agr user ka function True return krta hai toh 
//current value ko new array mai

//.filter-> normal inbuilt function
const n1 = arr.filter((e) => e % 2 == 0);
console.log(n1);

//.myFilter-> pollyFill
if(!Array.prototype.myFilter)
{
    Array.prototype.myFilter = function(userFn)
    {
        const result = [];
        for(let i=0;i<this.length;i++)
        {
            if(userFn(this[i]))
            {
                result.push(this[i]);
            }
        }
        return result;
    }
}

const n2 = arr.filter((e) => e % 2 == 0);
console.log(n2);
