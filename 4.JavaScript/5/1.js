 class Person
 {
    constructor(fname, lname)
    {
        this.a = fname;
        this.b = lname;
    }

    getFullname()
    {
        return `${this.a} ${this.b}`;
    }
 }

 const obj1 = new Person("Manish", "Nagpure");
 const obj2 = new Person("Piyush", "Garg");

 console.log(obj1.getFullname());
 console.log(obj2.getFullname());