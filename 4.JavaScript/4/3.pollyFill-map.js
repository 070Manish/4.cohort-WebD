const arr = [1, 2, 3, 4, 5, 6];
//signature .map
//return -New Array, Each ele Iterate, userFn,
//it do not modify original array

if(!Array.prototype.myMap)
{
    Array.prototype.myMap = function (userFn)
    {
        const result = [];

        for(let i=0;i<this.length;i++)
        {
            const value = userFn(this[i]);
            result.push(value);
        }
        return result;
    }
}

const newArr = arr.myMap((e) => e*3);
console.log(newArr)