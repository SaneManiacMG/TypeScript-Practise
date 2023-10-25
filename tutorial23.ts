class Person4 {
    constructor(name: string) {
        console.log(name + " Person Constructor");
    }

    getId() {
        return 10;
    }
}

class Employee4 extends Person4 {
    constructor(name: string) {
        super(name)
        console.log(name + " Employee Constructor");
    }

    getId() {
        return 50;
    }
}

let emp4 = new Employee4("Joe");
console.log(emp4.getId());
