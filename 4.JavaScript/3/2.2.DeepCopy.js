//1.1st Technique
let m1 = 
{
   fname: "Manish",
   lname: "ch",
   adress:
   {
     h: 1,
     s: 1,
   }
}

const m1KaString = JSON.stringify(m1);
console.log(m1KaString);
let m2 = JSON.parse(m1KaString);

m2.fname = "Shubham";
m2.adress.h = "hacked";

console.log(m1);
console.log(m2);
