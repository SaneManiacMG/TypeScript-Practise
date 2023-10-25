let firstName = "Chandler";
let lastName = "Bing";

let person = {
  firstName,
  lastName,
};

console.log(person.firstName); // Chandler
console.log(person.lastName); // Bing
console.log(person);

function createPerson(firstName: string, lastName: string, age: number) {
  let fullName = firstName + " " + lastName;
  return {
    firstName,
    lastName,
    fullName,
    isSenior() {
      return age > 60;
    },
  };
}

let p = createPerson("Ross", "Geller", 10);
console.log(p.firstName); // Ross
console.log(p.lastName); // Geller
console.log(p.fullName); // Ross Geller
console.log(p.isSenior()); // false

console.log(p);
