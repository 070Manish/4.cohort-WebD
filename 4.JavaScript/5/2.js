const obj1 =
{
    fname: "Manish",
    lname: "Nagpure",
    getFullname : function()
    {
        return `${this.fname} ${this.lname}`;
    }
};

const obj2 = 
{
    fname: "Piyush",
    lname: "Garg",    
}

const obj3 =
{
    fname: "Hitesh",
    lname: "Choudhary",
    __proto__: obj1
}

console.log(obj1.getFullname());
console.log(obj3.getFullname());
console.log(obj2.getFullname());
//obj2 me work nh kr rh qki vo function defined nh hai.