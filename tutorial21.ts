class Person{
    greet() {}
}

let personClass = new Person();

console.log(personClass.greet === Person.prototype.greet);
