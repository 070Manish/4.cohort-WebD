//1.Normal-> Memory Allocation
let fname1 = "Manish";
let fname2 = fname1;

console.log(fname1);
console.log(fname2);

fname2 = "Piyush";

console.log(fname1);
console.log(fname2);
//idhr copy bana rh 

//2.Objects-> Memory Allocation
let p1 = 
{
    fname1: "Manish",
}

let p2 = p1;//we are just copying reference instead of actual object
console.log(p2);

p2.fname1 = "Piyush";
console.log(p2);
console.log(p1);
//but for objects its working as pointer

//3.How to copy object instead of copying reference
let m1 = 
{
    fname1: "Manish",
    lname1: "Nagpure",
}

//we are making copy of object m1
let m2 = {
    fname : p1.fname1,
    lname1 : p1.lname1
}

console.log(m1);
console.log(m2)