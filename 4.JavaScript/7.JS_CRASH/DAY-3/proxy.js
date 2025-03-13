const user = 
{
    name : "Manish",
    age : 26,
    password : "123",
}

const proxyUser = new Proxy(user, 
    {
        get(target, prop)
        {
            console.log(prop);
            if(prop === "password")
            {
                throw new Error("Acess Denied");
            }
            return target[prop];
        },
        set(target, prop, user)
        {
            
        }
    }
)

console.log(proxyUser)
console.log(proxyUser.password)