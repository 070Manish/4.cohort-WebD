// Base class
class cls1 {
    constructor() {
        this.fname = "Manish";
        this.lname = "Nagpure";
    }

    getFullname() {
        return `${this.fname} ${this.lname}`;
    }
}

// Derived class cls2
class cls2 extends cls1 {
    constructor() {
        super();
        this.fname = "Piyush";
        this.lname = "Garg";
    }
}

// Derived class cls3
class cls3 extends cls1 {
    constructor() {
        super();
        this.fname = "Hitesh";
        this.lname = "Choudhary";
    }
}

// Creating instances
const obj1 = new cls1();
const obj2 = new cls2();
const obj3 = new cls3();

// Output
console.log(obj1.getFullname()); // Manish Nagpure
console.log(obj2.getFullname()); // Piyush Garg
console.log(obj3.getFullname()); // Hitesh Choudhary
