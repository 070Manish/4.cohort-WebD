let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function negativeIndex(arr)
{
    return new Proxy(arr,
    {
        get(target, prop)
        {
            const index = Number(prop);
            if(index < 0)
            {
                return target[target.length + index];
            }
            return target[idnex];
        },
        set(target, prop, value)
        {
            const index = Number(prop);
            if(index < 0)
            {
                target[target.length + index] = value;
            }
            else
            {
                target[index] = value;
            }
            return true
        }
    })
}

console.log(arr[-1]);

const proxyArr = negativeIndex(arr);
proxyArr[-2] = 3;
console.log(arr);
